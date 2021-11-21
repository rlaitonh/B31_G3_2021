import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from 'src/product/dto/create_product.dto';
import { CreateUserDTO } from './dto/create_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get()
    async getUserList(@Res() res){
        const users = await this.userService.getUsers();

        return res.status(HttpStatus.OK).json({
            message: "User Listed",
            data: users
        });
    }

    @Post('create')
    async createNewUser(@Res() res, @Body() createUserDTO:CreateUserDTO){
        
        const user = await this.userService.createUser(createUserDTO);

        return res.status(HttpStatus.CREATED).json({
            message: "User Created",
            data: user
        });
 
    }
}