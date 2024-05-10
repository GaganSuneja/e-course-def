const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');


const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const {connectDB} = require('./config/db');
const setMetaData = require('./metadata/script');

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
// Set up metadata

(async () => {
    await connectDB();
})();

setMetaData();

// Route files
const auth = require('./routes/auth');
const users = require('./routes/users');
const modules = require('./routes/module');
const activity = require('./routes/activity');

const app = express();

// Hpp Param prevention
app.use(hpp());

// Body parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

//File uploading
app.use(fileupload());

//Sanitize data
app.use(mongoSanitize());

//Set security headers


//Prevent XSS attacks
app.use(xss());

// Rate limiting
// const limiter = rateLimit({
//     windowMs: 10 * 60 * 1000, // 10 mins
//     max: 100
// });
// app.use(limiter);

// Enable CORS
app.use(cors());

// Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/module', modules);
app.use('/api/v1/activity', activity);
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {

	// serve static content from static frontend dist folder
	app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
	});

}

const PORT = process.env.PORT || 80;



app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT} and dirname ${__dirname}`
    )
);


// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//     console.log(`Error: ${err.message}`.red);
//     // Close server & exit process
//     // server.close(() => process.exit(1));
// });
