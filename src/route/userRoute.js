// Resourse - users
// /User

const express = require('express');
const { createUser } = require('../controller/userController');

//we have to initialise a route object to add routes in a new file
// router are used for segregating your routes in different files
const userRouter = express.Router();

userRouter.post('/',createUser);

module.exports = userRouter; // exporting the router