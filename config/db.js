// we use this the file we're gonna use Mongoose to connect to out Database

const mongoose = require('mongoose');
const config = require('config'); //we need to access that global variable that we created(default)
const db = config.get('mongoURI');

//mongoose returns promisses
// const connectDB = () => {
//   mongoose.connect(db, { //we added next line to not have warnings
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('MongoDB contected'))
//   .catch(err => {
//     console.log("Error: ",err.message)
//     //exit with failure:
//     process.exit(1);
//   });
// };

// OR update connectDB with async await:
const connectDB = async () => {
  try {
    await mongoose
    .connect(db, { 
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB contected...');

  } catch (err) {
    console.log("Error: ",err.message)
    //exit with failure:
    process.exit(1);
  }
};

module.exports = connectDB;