const router = require("express").Router()
const ProductController = require("../controllers/ProductController")

//Shoes @GET
router.get("/", ProductController.getAllShoes),


module.exports = router