    const {findUser,createUser} = require('../repository/userRepository')

    async function registerUser(userDetails){
        //it will create a brand new user in the db

        //1. we need to check if the user with this email or mobile number already exists or not
        const user = await findUser({
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
        const newUser = await createUser({
            email : userDetails.email,
            password : userDetails.password,
            firstName : userDetails.firstName,
            LastName : userDetails.LastName,
            mobileNumber : userDetails.mobileNumber
        });

        if(!newUser){
            throw{ reason: "Something went wrong, cannot create user", statusCode: 500}
        }
        //3. return the details of created user
        return newUser;
    }


module.exports = {
    registerUser
};