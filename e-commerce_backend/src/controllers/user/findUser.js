const jwt = require('jsonwebtoken');
const userRepository = require('../../domain/userRepository')


const findUser = async(req, res)=>{
    // const response = await userRepository.findUser(req.body);
    // if(!response){
    //     console.log('something went wrong');
    // res.status(500).send({
    //   message: "Internal Server Error",
    // });
    // }
    // res.status(200).send({
    //     message: "Login Successful!!",
    //     email: response.email,
    // })
    try {
        const response = await userRepository.findUser(req.body);
        const token = jwt.sign({
          userId: response._id,
          userEmail: response.email,
        },
        "RANDOM-TOKEN",
        {expiresIn: "24h"}
        );
    
        res.status(200).send({
          message: "Login Successful!!",
          email: response.email,
          token
        });
      } catch (error) {
        if (error.message === "Email not found.") {
          // Handle 404 Not Found
          res.status(404).send({
            message: "Email not found",
            error
          });
        } else if(error.message === "Wrong Password"){
            res.status(403).send({
                message: "Wrong Password",
                error
              });
        }
        else {
          // Handle other errors with a 500 Internal Server Error
          console.error('something went wrong:', error.message);
          res.status(500).send({
            message: "Internal Server Error",
          });
        }
      }
}

module.exports = findUser