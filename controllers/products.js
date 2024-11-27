const Product = require("../models/product");

const getAllProducts = async (req, res) =>{ 
    // const myData = await Product.find({ name: 'watchs'});
    // res.status(200).json({myData});
    const {company } = req.query;
    const queryObject = {};
    if(company){
        queryObject.company=company;

    }
    const Products = await Product.find(queryObject);
    res.status(200).json({Products});
};
const getAllProductsTesting = async (req, res) =>{ 

    const Products = await Product.find(req.query);
    console.log(req.query);
    res.status(200).json({Products});
};

module.exports  = { getAllProducts, getAllProductsTesting};  