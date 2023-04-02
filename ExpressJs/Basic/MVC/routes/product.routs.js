const express = require('express');
const { postProduct, getProduct } = require('../controllers/product.controller');
const routes = express.Router();

routes.get('/product', getProduct);

routes.post('/product',postProduct);

module.exports = routes;
