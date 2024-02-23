const mongoose = require("mongoose");
require("colors");
const mongoURI="mongodb+srv://sandhuarshpreet125:Arsh12@cluster0.f1a4xru.mongodb.net/Pos?retryWrites=true&w=majority"


//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;