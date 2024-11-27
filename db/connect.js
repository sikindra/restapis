const mongoose =require("mongoose");
const { options } = require("../routes/products");

//url="mongodb+srv://sikindar8109895993:MALuexUW14OCe6XQ@test.b18bf.mongodb.net/";
// mongodb+srv://sikindar8109895993:z1olcKKqPQ3d6U3r@test.b18bf.mongodb.net/?retryWrites=true&w=majority&appName=test

const connectDB = (url)  =>{
    //console.log("connect db");
    return mongoose.connect(url);

};
module.exports = connectDB;