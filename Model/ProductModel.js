const mongoose=require('mongoose');
// let {Schema}=require('mongoose')

// let Product=Schema({})



const productSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    productId:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    productImg:String
},{
    timestamps:true
})




module.exports=mongoose.model('Product',productSchema)