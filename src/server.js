  
'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
const signup=require('./routes/signup');
const signin=require('./routes/signin');
// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('server working');
});

app.get('/bad',(res,req)=>{
    throw new Error('Error');
});

app.use('/signup', signup);
app.use('/signin', signin);



app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};