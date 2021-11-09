import { productCategory } from "../enums/product.enums";

export class CreateProductDTO{
    readonly category:productCategory;
    readonly name: string;
    readonly unitValue: number;
    readonly stock: bigint;
    readonly description:string;
    readonly image:string;
}