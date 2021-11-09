import { Document } from "mongoose";
import { productCategory } from "../enums/product.enums";

export interface IProduct extends Document {
    readonly category:productCategory;
    readonly name: string;
    readonly unitValue: number;
    readonly stock: bigint;
    readonly description:string;
    readonly image:string;
}