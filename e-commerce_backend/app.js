const express = require('express')
const cors = require('cors');
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const userRouter = require('./src/routes/v1/userRoute');
const productRouter = require('./src/routes/v1/productRoute');

// mongoose.connect('mongodb+srv://nishithupadhyay:zE7JCxmzIraCLH0D@soccerstorecluster.gfp3n1l.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://nishithupadhyay:zE7JCxmzIraCLH0D@soccerstorecluster.gfp3n1l.mongodb.net/?retryWrites=true&w=majority')

// const User = require('./models/userModel')
// const Product = require('./models/productModel')
// const productData = require('./data/productData')
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use('/v1',[
    userRouter,
    productRouter,

]);
app.listen(4000);
// const productModel = require('./models/productModel')

// User.deleteMany()
// Product.deleteMany()
// const deleteAllData = async () => {
//     try {
//       await Product.deleteMany();
//       console.log('All Data successfully deleted');
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   deleteAllData()
// async function insert(){
//     await User.create({
//         name:"Nishith",
//         email:"nishith@gmail.com"
//     });

//     await Product.create(
//         productData
//     )
    
// }

// var Product  = mongoose.model('Product', productModel, 'products')

// Product.insert(productData, (err, docs)=>{
//     if (err){ 
//         return console.error(err);
//     } else {
//       console.log("Multiple documents inserted to Collection");
//     }

// })

// insert()

// async function 








