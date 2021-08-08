const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please enter product id']
    },
    unitOfItem: {
        type: String,
        required: [true, 'Please enter unit of item']
    },
    name: {
        type: String,
        required: [true, 'Please enter the name of the product']
    },
    categoryOfAsset: {
        type: String,
        required: [true, 'Please enter category of product']
    },
    count: {
        type: String,
        required: [true, 'Please enter count number']
    },
    stockCardBalance: {
        type: Number,
        required: [true, 'Please enter Stock Card Balance']
    },
    stockDiscrepancy: {
        type: Number,
        required: [true, 'Please enter Stock Discrepancy']
    },
    conditiontoGoods: {
        type: String,
        required: [true, 'Please enter the condition of the product']
    },
    LastDateOfMovment: {
        type: String,
        required: [true, 'Please enter the last date of movement']
    }

})


module.exports = mongoose.model('Product', productSchema);