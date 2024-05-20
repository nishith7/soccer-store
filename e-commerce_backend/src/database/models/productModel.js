const mongoose = require('mongoose')

const productSchema = new mongoose.Schema([{
    id: Number,
    category: String,
    type: String,
    name: String,
    imgSrc: String,
    price: Number,
    description: String,
    brand: String,

}]);

module.exports = mongoose.model('Products', productSchema);