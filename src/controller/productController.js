const {createProduct} = require('../services/productService')
const Product = require('../schema/productSchema');
const AppError = require('../utils/AppError');
const { getProductById ,deleteProductById } = require('../services/productService');
async function addProduct(req, res) {
try {
    const product = await createProduct({
        productName: req.body.productName,
        description: req.body.description,
        imagePath: req.file.path,
        price: req.body.price,
        category: req.body.category,//default veg
        inStock: req.body.inStock//default true
    });
    return res.status(201).json({
        success: true,
        message: 'successfully created the product',
        error: {},
        data: product
    })
} catch (error) {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
            data: {},
            error: error
        });
    }
    console.log(error)
    return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: error
    })
    
}
   
}
async function getProduct(req,res) {
    try {
        const response = await getProductById(req.params.id)
        return res.status(200).json({
            success : true,
            message : "Successfully fetched the product",
            error : {},
            data : response
        })
    } catch (error) {
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        }) 
    }    
}

async function deleteProduct(req,res) {
    try {
        const response = await deleteProductById(req.params.id)
        return res.status(200).json({
            success : true,
            message : "Successfully deleted the product",
            error : {},
            data : response
        })
    } catch (error) {
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        }) 
    }    
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct
}