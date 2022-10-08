const router = require("express").Router()
const ProductController = require("../controllers/ProductController")


router.get("/:id", ProductController.getProduct)
router.get("/", ProductController.getAllProduct)
router.post("/", ProductController.createProduct)
router.delete("/:id", ProductController.deleteProduct)
router.put("/:id", ProductController.updateProduct)






module.exports = router