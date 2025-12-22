//MongoDB is used to store and manage data in JSON-like format
//Mongoose is a tool/library that helps Node.js talk to MongoDB easily.


const mongoose = require("mongoose");

async function connectWithDb() { //camelcase name
  await mongoose.connect(process.env.CONNECTION_STRING)  //This line connects your app to MongoDB Atlas (cloud database).
console.log("DB connected successfully")
}
module.exports = connectWithDb //makes the function available to other files.