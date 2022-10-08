const Product = require("../models/Product")

const listWatch = () => {
    return Product.find({ categories: 'watch' })
}



module.exports = {
    listWatch
}