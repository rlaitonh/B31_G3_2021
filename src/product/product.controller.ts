import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Query, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/create_product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService ){}

    @Get()
    async getProductList(@Res() res){
        const products = await this.productService.getProducts();

        return res.status(HttpStatus.OK).json({
            data: products
        });
    }
    
    @Get('/getById/:productId')
    async getProductById(@Res() Res, @Param('productId')id){
        const product = await this.productService.getProductById(id);
        if (!product){
            throw new NotFoundException('product does not found');
        }
        return Res.status(HttpStatus.OK).json({
            data: product
        });
    }
    @Get('/getBy?')
    async getProductBy(
        @Res() Res, 
        @Query('productName')name,
        @Query('productCategory')category
        ){
        const product = await this.productService.getProductBy(name,category);
        if (!product){
            throw new NotFoundException('product does not found');
        }
        return Res.status(HttpStatus.OK).json({
            data: product
        });
    }
    @Post('create')
    async createNewProduct(@Res() res, @Body() createProductDTO:CreateProductDTO  ){
        
        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.CREATED).json({
            data: product
        });

    }

}
