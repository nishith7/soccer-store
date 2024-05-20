const userRepository = require('../../domain/userRepository');
const addUser = async(req, res)=>{
   
    const response = await userRepository.addUser(req.body);
if (!response) {
    console.log('something went wrong');
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
   
 res.status(201).send({
    message: "User Created Successfully",
    user: response,
  });

  // res.status(404).send({
  //   message: "Email not found",
  //       error,
  // })
}

module.exports = addUser


