const mongoose = require('mongoose');
const outlookMail = require('nodejs-nodemailer-outlook');
const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: false
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`);
};


module.exports = {connectDB,outlookMail}
