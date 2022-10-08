const router = require("express").Router()
const ProductController = require("../controllers/ProductController")

//Watches @GET
router.get("/", ProductController.getAllWatches),


module.exports = router