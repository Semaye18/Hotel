
import productModel from "../model/productModel.js"


export const getProduct=async(req,res)=>{
    const products=await productModel.find()
    res.json(products)
}
export const postProduct=async(req,res)=>{
const {image,title,price}=req.body
const newProducts={image,title,price}
await productModel.create(newProducts)
res.json(newProducts)
}
export const deleteProduct=async(req,res)=>{
const {id}=req.params
await productModel.findByIdAndDelete(id)
res.json("product silindi")
}

