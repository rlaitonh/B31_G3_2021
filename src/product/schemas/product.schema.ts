import { Schema } from "mongoose";
const root:string = '';
export const ProductSchema = new Schema({

    category: {
        type: String, 
        enum: ['Pan Dulce', 'Repostería','Donas','Hojaldres','Galletería', 'Postres', 'Pan Salado'],
        required: true
    },
    name: {type: String, required: true},
    unitValue: {type: Number, required: true },
    stock: {type: Number, required: true},
    description:  {type: String, required: true},
    imagePath: {type: String, get: v => `${root}${v}`, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});
