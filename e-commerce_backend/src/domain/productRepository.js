const products = require('../database/models/productModel');


const addBulkProducts = async(data)=>{
    try{
        const addAllProducts = await products.insertMany(data);
        return addAllProducts;
    }catch(error){
        console.log(error);
        return error;
    }

}
const addProduct = async(data)=>{
    try{
        const newProduct = await products.create(data);
        return newProduct;
    }catch(error){
        console.log(error);
        return error;
    }
}

const getProduct = async(query)=>{
    try{
        const sort = {price:1};
        const filterArr = [];
        Object.entries(query).forEach((value) => {
            filterArr.push({ [value[0]]:value[1].split(',')  })
        })
        console.log('gooooooo',filterArr);
        const newProductCategory = await products.find({
            $and: filterArr,

        })
                .sort(sort);
        return newProductCategory;

    }catch(error){
        console.log(error);
        return error;

    }
    
}


module.exports = {
    addProduct,
    addBulkProducts,
    getProduct,
};