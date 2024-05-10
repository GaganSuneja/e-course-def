const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
// Load env vars
dotenv.config({ path: './config/config.env' });
// {
//   "name": "Sushil Bhutani",
//   "email": "sushil.bhutani@gmail.com",
//   "role": "user",
//   "password": "sushil_admin",
//   "contact": 999999999,
//   "gender":"M",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Preety Kochar",
//   "email": "preety.kochhar@gmail.com",
//   "role": "user",
//   "password": "preety_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Poonam Ghai",
//   "email": "poonamghai12@gmail.com",
//   "role": "user",
//   "password": "poonam_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Isabel Wolf",
//   "email": "iwolf@sos.org",
//   "role": "user",
//   "password": "isabel_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Usha Udaar",
//   "email": "ushaudaar@gmail.com",
//   "role": "user",
//   "password": "usha_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Susan Gallagher",
//   "email": "gallagher.susan@gmail.com",
//   "role": "user",
//   "password": "gallagher_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// },
// {
//   "name": "Nakkashi Naghpal",
//   "email": "nakkashinaghal@gmail.com",
//   "role": "user",
//   "password": "nakkashi_admin",
//   "contact": 999999999,
//   "gender":"F",
//   "school":"Darshan Academy, HQ",
//   "designation":"STTC Reviewer"
// }
// Load models
// const Bootcamp = require('./models/Bootcamp');
// const Course = require('./models/Course');
const User = require('./models/User');
// const Assessment = require('./models/Assessment');
// const Module = require('./models/Module');
// const truefalse = require('./models/truefalse');
// const fillInBlank = require('./models/fillInBlank');
// const mcq  = require('./models/mcq');
// const matching = require('./models/matching');
// const rating = require('./models/rating');
// // const Review = require('./mo2st users =
//
//
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/reviews.json`, 'utf-8')
// );

// const modules = JSON.parse(
//     fs.readFileSync(`${__dirname}/_data/modules.json`, 'utf-8')
// );
// const truefalseQ = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/trueFalse.json`, 'utf-8')
// );

// const fillInBlankQ = JSON.parse(fs.readFileSync(`${__dirname}/_data/fillInBlank.json`, 'utf-8'));

// const mcqQuestion  = JSON.parse(fs.readFileSync(`${__dirname}/_data/mcq.json`, 'utf-8'));
// const matchingQuestions  = JSON.parse(fs.readFileSync(`${__dirname}/_data/matching.json`, 'utf-8'));
// const ratingQs  = JSON.parse(fs.readFileSync(`${__dirname}/_data/rating.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
      console.log('inside;');
    // await Bootcamp.create(bootcamps);
    // await Course.create(courses);
     await  User.create(users);
    // await Review.create(reviews);
    //   console.log(modules);
    //  await Module.create(modules);
    //  await truefalse.create(truefalseQ);
    //  await fillInBlank.create(fillInBlankQ);
    //  await mcq.create(mcqQuestion);
    // await mcq.create(mcqQuestion);
    // await truefalse.create(truefalseQ);
    // await matching.create(matchingQuestions);
    // await Module.create(modules);
    // await rating.create(ratingQs);

    console.log('Data Imported...'.green.inverse);
    process.exit();
    console.log('exited');
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    // await Bootcamp.deleteMany();
    // await Course.deleteMany();
    //  await Module.deleteMany();
    // // await Review.deleteMany();
    // await mcq.deleteMany();
    // await fillInBlank.deleteMany();
    // // await mcq.deleteMany();
    // await truefalse.deleteMany();
    // await matching.deleteMany();
    await  User.deleteMany();
    //   await rating.deleteMany();
    // await Module.deleteMany();

    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
