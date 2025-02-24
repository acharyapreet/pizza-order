const express = require('express');
const {addProduct, getProduct, deleteProduct} = require('../controller/productController');
const uploader = require('../middlewares/multerMiddleware');
const productRouter = express.Router();

productRouter.post('/',uploader.single('ProductImage'),addProduct);    
productRouter.get('/:id',getProduct);    
productRouter.delete('/:id',deleteProduct);    
// productRouter.delete('/:id',);

/**
 * GET /products/:id
 * DELETE /products/:id
 */

module.exports = productRouter;