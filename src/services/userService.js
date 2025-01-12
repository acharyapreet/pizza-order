const User = require("../schema/userSchema");

class UserService {

    constructor(_userRepository){
        // in the argument we will expect userRepository object
        this.userRepository = _userRepository
    }
    async registerUser(userDetails){
        console.log("hitting service layer")
        //it will create a brand new user in the db

        //1. we need to check if the user with this email or mobile number already exists or not
        const user = await this.userRepository.findUser({
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber
        });

        if(user){
            // we found the user
            throw{
                reason : "User with the given email and mobile number already exist", statusCode: 400
            }
        }
        //2. if not then create the user in the database
        const newUser = await this.userRepository.createUser({
            email : userDetails.email,
            password : userDetails.password,
            firstName : userDetails.firstName,
            LastName : userDetails.LastName,
            mobileNumber : userDetails.mobileNumber
        })

        if(!newUser){
            throw{ reason: "Something went wrong, cannot create user", statusCode: 500}
        }
        //3. return the details of created user
        return newUser;
    }
}

module.exports = UserService;