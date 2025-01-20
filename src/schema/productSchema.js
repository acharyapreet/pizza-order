const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : [true, "Product name is required"],
        minLength : [5, "Product name must be atleast 5 characters"],
        trim : true
    },
    description : {
        type : String,
        minLength : [5,"Product description must be atleast 5 characters"]
    },
    productImage : {
        type : String
    },

    category : {
        type : String,
        required : true,
        enum : ['veg','drinks','sides'],
        default : 'veg'
    },
    inStock : {
        type : Boolean,
        default : true
    },
    price : {
        type : Number,
        required : [true, "Product price is required"]
    }
},{timestamps : true});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;