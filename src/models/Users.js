'use strict'

const mongoose = require('mongoose');
// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true,Unique :true},
    password: { type: String, required: true,Unique:true },
  });
  const Users = mongoose.model('users', usersSchema);
  
  module.exports=Users;
