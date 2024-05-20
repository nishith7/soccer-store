const productRepository = require('../../domain/productRepository');


const prodCateWise = async(req,res)=>{
    console.log('--->>',req.query);
    const response = await productRepository.getProduct(req.query);

    if(!response){
        console.log('something went wrong');
    }
    res.status(200).json(response);
    return response;
}

module.exports = prodCateWise