const asyncHandler = require("express-async-handler");
const Product=require('../Model/ProductModel')
const getItem = asyncHandler(async(req, res, next) => {
    const Products =await Product.find();
  res.status(200).json(Products);
  next();
});
const postItem = asyncHandler(async (req, res, next) => {
  if (!req.body) {
    res.status(400);
    throw new Error("please add text");
  } else{
      const setProduct=await Product.create({
        text:req.body.text,
        productId:req.body.productId,
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productDesc:req.body.productDesc,
        productImg:req.body.productImg
      })
    res.status(200).json(setProduct);
  }
  next();
});

const updateItem = asyncHandler(async (req, res, next) => {
    const findProduct=await Product.findById(req.params.id)
    if (!findProduct) {
        res.status(400).json('not for me')
        throw new Error()
    }

    const updatedProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res
    .status(200)
    .json(updatedProduct);
  next();
});
const delItem = asyncHandler(async (req, res, next) => {
    const findProduct=await Product.findById(req.params.id)
    if (!findProduct) {
        res.status(400).json('not for me')
        throw new Error()
    }
    await Product.deleteOne()
  res.status(200).json({id:req.params.id});
  next();
});

console.log({Product},'this is model controller')

module.exports = {
  getItem,
  postItem,
  updateItem,
  delItem,
};
