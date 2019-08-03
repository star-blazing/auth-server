
const express = require('express');
const amazinRouter = express.Router();


amazinRouter.get('/amzOAuth', (req,res,next) => {
  let code = req.code;
  console.log(code);
  res.status(200).send('SomeShit');
});

amazinRouter.post('/endpoint', (req,res,next) => {
  let token = req.token;
  
  res.status(200).send('Success');
});


//Write a /get to catch the "Code" coming from amazon
//send that code to their token server
// POST to catch the incoming token and send it to their server to get the persons info
//receive the client info and send it to the front end

