'use strict';

const express = require('express');
const amazinRouter = express.Router();


amazinRouter.get('/amzOAuth', (req,res,next) => {
  let code = req.code;
  console.log({code});
  res.status(200).send(code.access_token);
});

