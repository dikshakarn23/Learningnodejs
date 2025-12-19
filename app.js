// npmjs .. Json is javascript object notation
//Express is a Node.js module..reusable block of code
const express= require("express") //var,let
const connectWithDb = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blogModel")  //**********// */
const app = express()
//node --watch app.js

connectWithDb() //function called here


app.get("/",function(req,res){ //(ab,cd)
    res.json({
        name :"home page"
    }) //cd.send
})

app.get("/about",function(req,res){ //(ab,cd)
    res.json({
        address :"about page address",
        age : 17,
        name: "aditi"
    }) //cd.send
})

//mongodb+srv://nodejsworshop:<db_password>@cluster0.cryidss.mongodb.net/?appName=Cluster0


// comment

///////////////////////////////////////////////////////////////////////



// app.get("/",function(req,res){ //(ab,cd)
//     res.send("hello world") //cd.send
// })

// app.get("/about",function(req,res){ //../about is api or route
//     res.send("about world") //localhost:3000/about
// })






app.get("/fetch-users", async function(req,res){
    const data = await User.find()          //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
    res.json({
        data //or we can also use data:data
    })

})

app.get("/fetch-Blog", async function(req,res){
    const data = await Blog.find()          //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
    res.json({
        data //or we can also use data:data
    })

})

app.listen(3000,function() { // listen is method and call back  function is used.. 3000 is port number..allows a single device to run multiple network services simultaneously (like a web server and an email server) and ensures that incoming network traffic is directed to the correct destination process
    console.log("server has started at port 3000") //here if ensured this will be printed
}) // search http://127.0.0.1:3000/ or localhost:3000 or http://[::1]:3000/