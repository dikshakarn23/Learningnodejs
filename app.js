// npmjs .. Json is javascript object notation
//Express is a Node.js module..reusable block of code
const express = require("express"); //var,let
const connectWithDb = require("./database/connection");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");
const app = express();
const bcrypt = require("bcrypt");
require("dotenv").config();

//node --watch app.js or npm run aditi

connectWithDb(); //function called here
app.use(express.json());

app.get("/", function (req, res) {
  //(ab,cd)
  res.json({
    name: "home page",
  }); //cd.send
});

app.get("/about", function (req, res) {
  //(ab,cd)
  res.json({
    address: "about page address",
    age: 17,
    name: "aditi",
  }); //cd.send
});

//mongodb+srv://nodejsworshop:<db_password>@cluster0.cryidss.mongodb.net/?appName=Cluster0

// comment

///////////////////////////////////////////////////////////////////////

// app.get("/",function(req,res){ //(ab,cd)
//     res.send("hello world") //cd.send
// })

// app.get("/about",function(req,res){ //../about is api or route
//     res.send("about world") //localhost:3000/about
// })

app.get("/fetch-users", async function (req, res) {
  const data = await User.find(); //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
  res.json({
    data, //or we can also use data:data
  });
});

app.get("/fetch-Blog", async function (req, res) {
  const data = await Blog.find(); //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
  res.json({
    data, //or we can also use data:data
  });
});

app.post("/register", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //  const {name,email,password} = req.body //destructuring
  console.log(name, email, password);
  await User.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password, 10), //8-30 saltnumber4
  });
  res.json({
    message: "User registered successfully",
  });
});

app.post("/blog", async function (req, res) {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  //  const {name,email,password} = req.body //destructuring
  console.log(title, subtitle, description);
  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });
  res.json({
    message: "Blog is added",
  });
});

app.patch("/update-blog/:id", async function (req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  console.log(title, subtitle, description);

  await User.findByIdAndUpdate(id, {
    title,
    subtitle,
    description,
  });
  res.json({
    message: "blog is updated",
  });
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password; //const {email,password} = req.body
  const data = await User.findOne({ email: email })
  if (!data) {
    res.json({
      message: "Not Registered"
    })

  } else {
    const isMatched = bcrypt.compareSync(password, data.password);
    if (isMatched) {
      res.json({
        message: "logged in",


      });
    } else {
        res.json({
             message: "wrong password"
        })
     
    }
}
});

app.get("/fetch-Blog/:id", async function (req, res) {
  const data = await User.findById(req.params.id); //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
  res.json({
    //select is for removing
    data, //or we can also use data:data
  });
});

app.get("/fetch-users/:id", async function (req, res) {
  const data = await User.findById(req.params.id).select(["-password", "-__v"]); //User //user.find(),user.create(),user.findByIdAndDelete(),user.findByIdAndUpdate()
  res.json({
    //select is for removing
    data, //or we can also use data:data
  });
});

app.delete("/delete/:id", async function (req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    message: "user with that id has been deleted successfully",
  });
});

app.delete("/delete", async function (req, res) {
  const id = req.body.id;
  console.log(id);

  await User.findByIdAndDelete(id);
  res.json({
    message: "user with that id has been deleted successfully",
  });
});

app.patch("/update-user/:id", async function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name, email, password);

  await User.findByIdAndUpdate(id, {
    name: name,
    password: password, //bcrypt.hashSync(password,10),
    email: email,
  });
  res.json({
    message: "User updated",
  });
});

app.listen(3000, function () {
  // listen is method and call back  function is used.. 3000 is port number..allows a single device to run multiple network services simultaneously (like a web server and an email server) and ensures that incoming network traffic is directed to the correct destination process
  console.log("server has started at port 3000"); //here if ensured this will be printed
}); // search http://127.0.0.1:3000/ or localhost:3000 or http://[::1]:3000/

//task: make and create and delete  operation api for blog having field title, subtitle,drescription
