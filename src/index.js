const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
// const User = require('./schema/userSchema');
const userRouter = require('./route/userRoute');
const cartRouter = require('./route/cartRoute');
const authRouter = require('./route/authRoute');
const { isLoggedIn } = require('./validation/authVaditator');
const uploader = require('./middlewares/multerMiddleware');
const cloudinary = require('./config/cloudinaryConfig');
const fs = require('fs/promises');
const productRouter = require('./route/productRoute');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


//Routing middleware
// if your req route starts with /user then hendle it using userRouter
app.use('/users' , userRouter); //connects the router to the server
app.use('/carts',cartRouter);
app.use('/auth' ,authRouter);
app.use('/products',productRouter);
// app.use('/product2',productRoute);


app.post('/ping',isLoggedIn,(req, res) => {
    console.log(req.body);
    console.log(req.cookies)
    return res.json({message : "pong"});
});

// app.post('/photo',uploader.single('incomingFile'),async(req, res) =>{
//     console.log(req.file);
//     const result = await cloudinary.uploader.upload(req.file.path);
//     console.log(result);
//     await fs.unlink(req.file.path);
    
//     return res.json({message : 'ok'});
// });

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
// localhost:5500//users-POST
// localhost:5500//carts/56-GET
console.log('ok till index 3')
