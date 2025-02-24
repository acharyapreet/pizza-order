const cloudinary = require('../config/cloudinaryConfig');
const ProductRepository = require('../repository/productRepository');
const fs = require('fs/promises');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');
async function createProduct(productDetails) {
    //1. we should check if an image is coming to create the product , then we should
    //cloudinary

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try {
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.srcure_url;
            await fs.unlink(imagePath);
        } catch (error) {
            console.log(error)
            throw new InternalServerError();

        }

    }
    //store in db
    
    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage: productImage
    });

    return product;

}

async function getProductById(productId){
    const response = await ProductRepository.getProductById(productId);
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
}
async function deleteProductById(productId){
    const response = await ProductRepository.deleteProductById(productId);
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
}

module.exports = {
    createProduct,
    getProductById,
    deleteProductById
};