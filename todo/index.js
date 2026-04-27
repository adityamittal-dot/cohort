const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "adityamittal@gmail.com";
const mongoose = require("mongoose");
const { z } =  require("zod");


mongoose.connect("mongodb+srv://admin1:nN3BCDMchYxgD02D@cluster101.z7hsae0.mongodb.net/");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){

  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string(),
    password: z.string()
  })
  const parsedDataWithSuccess = requiredBody.safeParse(req.body); 

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bycrypt.hash(password, 10);
  console.log(hashedPassword);
  await UserModel.create({
    email: email,
    password: password,
    name: name
  });

  res.json({
    message: "You are logged in :)"
  })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await UserModel.findOne({
      email: email,
      password: password 
    })

    console.log(user);

    if(user) {
      const token = jwt.sign({
        id: user._id
      }, JWT_SECRET);
      res.json({
        token: token
      })
    } else {
      res.status(403).json({
        message: "invalid credentials"
      })
    }
});

app.post("/todo", function(req, res){
  
});

app.get("/todos", function(req, res){
  
});

function auth(req, res, next){
  const token = req.headers.token;
  const decodeData = jwt.verify(token, JWT_SECRET);

  if(decodeData){
    req.userId = decodeData.id;
    next();

  } else {
    res.status(403).json({
      message: "invalid credentials"
    })
  } 
}

app.listen(3000);