const User = require('../database/models/userModel');
const bcrypt = require('bcrypt');



const addUser = async(data)=>{
    console.log('----->>',data);
    try{
            const hashedPass = await bcrypt.hash(data.password, 10);
            const user = User.create({
                name: data.name,
                email: data.email,
                password: hashedPass,
              });
                return user
    }catch(error){
        console.log(error);
        return error;
    }
}

const findUser = async(body)=>{
    const userFound = await User.findOne({email:body.email})
    if(userFound){
      const passCheck = await bcrypt.compare(body.password, userFound.password);
    //   console.log(passCheck);
      if(!passCheck){
        throw new Error('Wrong Password');
      }
    }
    else if(!userFound){
        throw new Error(`Email not found.`);
    }
    return userFound;
}
    

        //   })
        //   return user;
        //   user
        // .save().then((result)=>{
        //     // data.status(201).send({
        //         console.log('repo--->>',result);
        //         return result
        //     })
        // })
        // return user;
        // return success if the new user is added to the database successfully
    //     .then((result) => {
    //       return result
    //     })
    //     // catch error if the new user wasn't added successfully to the database
    //     .catch((error) => {
    //       return error
    //     })
    // }).catch((e) => {
    //     return e;
    //   });
       
    

module.exports = {
    addUser,
    findUser,
};

