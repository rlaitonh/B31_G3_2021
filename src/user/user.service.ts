import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create_user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser> ){}


    async getUsers():Promise<IUser[]>{
        const users = await this.userModel.find();
        return users;
    }

    async createUser( createUserDTO: CreateUserDTO):Promise<IUser>{
        const user = new this.userModel(createUserDTO);
        await user.save();
        return user;
    }

}
