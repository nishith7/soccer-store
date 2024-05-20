const productRepository = require('../../domain/productRepository');

const addProduct = async(req, res)=>{
    console.log('--->>',req.body);
    const response = await productRepository.addProduct(req.body);

    if(!response){
        console.log('somethign went wrong');
    }
    res.status(201).json(response);
    return response;

}

module.exports = addProduct