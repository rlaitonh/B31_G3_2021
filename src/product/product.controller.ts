import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
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

    @Get('/getBy')
    async getProductBy(
        @Res() res, 
        @Query('productName') name,
        @Query('productCategory') category
        ){
        
        const product = await this.productService.getProductBy(name, category);

        if(!product){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'product found',
            data: product
        });
    }    
    
    @Get('id/:productId')
    async getProductById(@Res() Res, @Param('productId')id){
        const product = await this.productService.getProductById(id);
        if (!product){
            throw new NotFoundException('product does not found');
        }
        return Res.status(HttpStatus.OK).json({
            data: product
        });
    }
    @Get('name/:productName')
    async getProductByName(@Res() Res, @Param('productName')name){
        const product = await this.productService.getProductByName(name);
        if (!product){
            throw new NotFoundException('product does not found');
        }
        return Res.status(HttpStatus.OK).json({
            data: product
        });
    }
    @Get('category/:productCategory')
    async getProductByCategory(@Res() Res, @Param('productCategory')category){
        const product = await this.productService.getProductByCategory(category);
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
    @Put('/update/:studentId')
    async updateStudent(  @Res() res, @Body() createProductDTO: CreateProductDTO, @Param('studentId') id){
        const product = await this.productService.updateProduct(id, createProductDTO);

        if(!product){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student updated',
            product        });
    }
    @Delete('/delete')
    async deleteStudent(@Res() res, @Query('productId') id){
        
        const product = await this.productService.deleteProduct(id);

        if(!product){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Student deleted',
            data: product
        });
    }
}
