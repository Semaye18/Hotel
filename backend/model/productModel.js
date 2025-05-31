import mongoose from "mongoose";


export const productShema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})


const productModel=mongoose.model('products',productShema)


export default productModel