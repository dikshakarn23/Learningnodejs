// npmjs .. Json is javascript object notation
//Express is a Node.js module..reusable block of code
const express= require("express") //var,let
const app = express()

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


// comment









// app.get("/",function(req,res){ //(ab,cd)
//     res.send("hello world") //cd.send
// })

// app.get("/about",function(req,res){ //../about is api or route
//     res.send("about world") //localhost:3000/about
// })


app.listen(3000,function() { // listen is method and call back  function is used.. 3000 is port number..allows a single device to run multiple network services simultaneously (like a web server and an email server) and ensures that incoming network traffic is directed to the correct destination process
    console.log("server has started at port 3000") //here if ensured this will be printed
}) // search http://127.0.0.1:3000/ or localhost:3000 or http://[::1]:3000/