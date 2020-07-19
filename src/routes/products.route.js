const { Router } = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/products', async (req, res, next) => {
  let paginateParam = '';
  if (req.query.page && req.query.limit) {
    paginateParam = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10
    }
  }
  let products = await Product.paginate({}, paginateParam);
  res.json(products);
})

router.get('/products/:id', async (req, res, next) => {
  let product = await Product.find({ _id: req.params.id });
  res.json(product);
})

router.post('/products', async (req, res, next) => {
  const addProduct = new Product(req.body);
  const product = await addProduct.save();
  res.json(product);
})

router.put('/products', async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    re.body,
    { new: false }
  );
  res.json(product);
})

router.delete('/products', async (req, res, next) => {
  const product = await Product.findByIdAndDelete(
    req.params.id
  );
  res.json(product);
})

module.exports = router;
