const express = require('express');

const router = express.Router();

const { getProducts, getSingleProduct, newProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const { isAuthenticatedUser, authorizRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizRoles('admin'), newProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizRoles('admin'), updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizRoles('admin'), deleteProduct);

module.exports = router;