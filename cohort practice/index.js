const express = require('express');
const jwt =  require('jsonwebtoken');
const JWT_SECRET = "adityamittal@gmail.com"
const app = express();
const port = 3000;
app.use(express.json());

const users = [];

function generateTokens(){
  
}

app.post("/signup", function(req, res){

  // input validation using ZOD


    const username = req.body.username;
    const password = req.body.password;



    users.push({
      username: username,
      password: password
    })


    req.json({
      message: "your are signed IN"x
    })

    console.log(users)
})

app.post("/signin", function(req, res){

  const username = req.body.username;
  const password = req.body.password;

  let founduser = null;

  for(let i =0; i<users.length; i++){
    if(users.[i].username == username && users[i].password){
      founduser = users[i]
    }
  }

  if (founduser){
    const token = jwt.sign({
      username: username,
      password: password,
      firstname,
      lastname,
      cousrses: []

    }, JWT_SECRET);

    res.json({
      token: token
    }) 
  } else {
    res.status(403).send({
      message: "invalid username or password"
    })
  }
  console.log(users)

})

app.get("/me", function(req, res){
  const token = req.headers.token
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const unAuthDecodedinfo = jwt.decode(token, JWT_SECRET);
  const username = decodedInformation.username

  let foundUser = null;

  for(let i = 0; i<users.length; i++){
    if(users[i].username == username){
      foundUser = users[i]
    }
  }

  if(foundUser){
    res.json({
      username: foundUser.username,
      password: foundUser.password
    })
  } else {
    res.json({
      message: "token invalid"
    })
  }
})

app.listen(3000);
