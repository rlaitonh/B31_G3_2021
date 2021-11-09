import { Schema } from "mongoose";
import { productCategory } from "../enums/product.enums";

export const ProductSchema = new Schema({
    category: {type: productCategory, required: true},
    name: {type: String, required:true},
    unitValue: {type: Number, required:true},
    stock: {type: BigInt, required:true},
    description: {type: String, required:true},
    image: {type: String, required:true}
})