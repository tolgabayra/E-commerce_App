const router = require("express").Router()
const ProductController = require("../controllers/ProductController")
const uploadMiddleware = require("../middlewares/uploadMiddleware")


router.get("/:id", ProductController.getProduct)
router.get("/", ProductController.getAllProduct)
router.post("/", uploadMiddleware.single("image"),ProductController.createProduct)
router.delete("/:id", ProductController.deleteProduct)
router.put("/:id", ProductController.updateProduct)





module.exports = router