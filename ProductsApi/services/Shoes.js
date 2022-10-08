const Product = require("../models/Product")

const listShoes= () => {
    return Product.find({ categories: 'shoes' })
}



module.exports = {
    listShoes
}