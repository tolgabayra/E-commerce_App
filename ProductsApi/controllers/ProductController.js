const Product = require("../models/Product")
const { listShoes } = require("../services/Shoes")
const { listWatch } = require("../services/Watches")

const createProduct = async (req, res) => {
  const {title, desc, categories,price} = req.body
  const newProduct = new Product({
    title: title,
    desc: desc,
    img: '/uploads/'+req.file.filename,
    categories: categories,
    price: price

  })

  console.log(newProduct);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product has been deleted.")
  } catch (err) {
    res.status(500).json(err)
  }
}

const updateProduct = async () => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().limit(100)
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllShoes = async (req, res) => {
  try {
    const shoes = await listShoes()
    res.status(200).json(shoes)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllWatches = async (req, res) => {
  try {
    const shoes = await listWatch()
    res.status(200).json(shoes)
  } catch (err) {
    res.status(500).json(err)
  }
}




module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProduct,
  getAllShoes,
  getAllWatches
}