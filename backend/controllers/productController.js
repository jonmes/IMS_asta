const Productmodel = require("../models/productmodel");
const ErrorHandler = require("../utils/errorHandler");

// ErrorHandler promise
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// Create new product  => /api/v1/product/new

exports.newProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Productmodel.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
})


// Get all products => /api/v1/products
exports.getProducts = catchAsyncErrors(async(req, res, next) => {

    const products = await Productmodel.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    });
})


// Get single product details => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors(async(req, res, next) => {

    const product = await Productmodel.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        product
    })
})


// Update product => /api/v1/product/:id
exports.updateProduct = catchAsyncErrors(async(req, res, next) => {

    let product = await Productmodel.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Productmodel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })

})


// Delete product => /api/v1/admin/product/:id

exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {
    let product = await Productmodel.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
})