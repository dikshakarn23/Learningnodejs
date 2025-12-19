const mongoose = require("mongoose")
const schema = mongoose.Schema //Schema decides what type of data will be stored
//taking Schema from mongoose and storing it in schema

const Schema = new schema({ //creating a schema (structure)
    Tablename : String,
    title : String,
    subtitle : String,
    Description : String,
})



const Blog = mongoose.model("Blog",Schema)
module.exports = Blog

//you can use it in other files like:
//const Blog = require("./Blog")
