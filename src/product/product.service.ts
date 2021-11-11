import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create_product.dto';
import { IProduct } from './interfaces/product.interface';


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel : Model<IProduct> ){ 
    }

    async getProducts():Promise<IProduct[]>{
        const products = await this.productModel.find();
        return products;
    }
    async getProductById(productId: string):Promise<IProduct>{
        const product = await this.productModel.findById(productId);
        return product;
    }
    async getProductBy(productName: string, productCategory:string):Promise<IProduct>{
        const product = await this.productModel.findOne({name: productName, category: productCategory})
        return product;
    }
    async getProductByCategory(productCategory: string):Promise<IProduct>{
        const product = await this.productModel.findOne({category: productCategory})
        return product;
    }    
    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        const product = new this.productModel(createProductDTO);
        await product.save();       
        return product;
    }
    async updateProduct(productId: string, createProductDTO: CreateProductDTO):Promise<IProduct>{
        const product = await this.productModel.findByIdAndUpdate(productId, createProductDTO)
        return product;
    }      
    async deleteProduct(productId: string):Promise<IProduct>{
        const product = await this.productModel.findByIdAndDelete(productId);
        return product;
    }

}


