const productRepository = require('../../domain/productRepository');
const productData = require('../../database/data/productData');

const addBulk = async(req,res)=>{
    const response = await productRepository.addBulkProducts(productData);

    if(!response){
        console.log('something went wrong');
    }
    res.status(201).json(response);
    return response;
}

module.exports = addBulk