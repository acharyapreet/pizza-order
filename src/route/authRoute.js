const express = require('express');
const { login } = require('../controller/authController');

//we have to initialise a route object to add routes in a new file
// router are used for segregating your routes in different files
const authRouter = express.Router();

authRouter.post('/login',login);

module.exports = authRouter; // exporting the router