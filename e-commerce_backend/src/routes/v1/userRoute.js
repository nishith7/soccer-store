const router = require('../router');

const addUser = require('../../controllers/user/addUser');
const findUser = require('../../controllers/user/findUser')

const {userEndpoints} = require('../../utils/strings');



router.post('/user',addUser
    // userEndpoints.post,addUser
);

router.post(userEndpoints.login,findUser)



module.exports = router; 