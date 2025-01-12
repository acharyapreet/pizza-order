const { model } = require('mongoose');
const UserService = require('../services/userService');
const UserRepository = require('../repository/userRepository');

async function createUser(req,res){
    console.log('Create user controller called');
    console.log((req.body))
    //todo : register the user

    const userService = new UserService(new UserRepository());
    console.log(userService);
    try {
        const response = await userService.registerUser(req.body)

        return res.json({
            message : 'Successfully registered the user',
            success : true,
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error
        })
    }
}

module.exports = {
    createUser
}