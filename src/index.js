const express = require('express');
const bodyParser = require('body-parser');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.post('/ping',(req, res) => {
    console.log(req.body);
    return res.json({message : "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}....`);

    // const newUser = await User.create({
    //     email : 'a@b.com',
    //     password : "123456",
    //     firstName : "Abhay",
    //     LastName : "Kumar",
    //     mobileNumber : "1234567890"
    // });

    // console.log(newUser);
});