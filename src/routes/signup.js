'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const signupRouter = express.Router();
const Users = require('../models/Users');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
signupRouter.post('/', signUp);

async function signUp(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = new Users(req.body);
        console.log(user);
        const exist = await Users.findOne({ username: req.body.username })
        if (exist) {
            next('user already exist');
        } else {

            const record = await user.save(req.body);
            res.status(200).json(record);
        }
    }catch (e) { res.status(403).send("Error Creating User"); }
}

module.exports = signupRouter;

