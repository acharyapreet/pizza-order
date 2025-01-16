const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "First Name is required"],
        minLength: [5,"First Name must be at least 5 characters long"],
        lowercase : true,
        trim : true,
        maxLength : [20, "First Name can have maximum 20 characters"],
    },
    LastName : {
        type : String,
        required : [true, "First Name is required"],
        minLength: [5,"First Name must be at least 5 characters long"],
        lowercase : true,
        trim : true,
        maxLength : [20, "First Name can have maximum 20 characters"],
    },
    mobileNumber : {
        type : String,
        trim : true,
        maxLength : [10,"max 10"],
        minLength : [10,"min 10"],
        unique : [true, "Mobile Number is already registered"],
        required : [true, "Mobile Number is required"]
    },
    email : {
        type : String,
        trim : true,
        unique : [true, "Email is already registered"],
        required : [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : true,
        minLength : [6,"min 6"],
    }
    
},{
    timestamps: true
});

userSchema.pre('save',async function () {
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password = hashedPassword;
})

const User = mongoose.model("User",userSchema);

module.exports = User;