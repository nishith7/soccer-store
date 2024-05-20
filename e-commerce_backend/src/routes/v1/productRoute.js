const router = require('../router');

const addProduct = require('../../controllers/product/addProduct');
const addBulk = require('../../controllers/product/addBulkProducts');

const getProduct = require('../../controllers/product/getProductCategoryWise');

const {productEndpoints} = require('../../utils/strings');


router.post(productEndpoints.post, addProduct);

router.post(productEndpoints.postAll,addBulk);

router.get(productEndpoints.getCategory, getProduct)



module.exports = router;