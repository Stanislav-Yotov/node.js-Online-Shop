const path = require('path');
const isAuth = require('../middleware/is-auth.js');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/add-product', isAuth, adminController.getAddProduct);

router.post('/add-product', isAuth, adminController.postAddProduct);


router.get('/products', isAuth, adminController.getProducts);


router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

 module.exports = router;
