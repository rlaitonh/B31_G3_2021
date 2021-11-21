import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create_user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser> ){}


    async getUsers():Promise<IUser[]>{
        const users = await this.userModel.find();
        return users;
    }

    async getUserByID(userId: string):Promise<IUser>{
        const user = await this.userModel.findById(userId);
        return user;
    }

    async createUser( createUserDTO: CreateUserDTO):Promise<IUser>{
        const user = new this.userModel(createUserDTO);
        await user.save();
        return user;
    }

    async updateUser(userId: string, createUserDTO: CreateUserDTO):Promise<IUser>{
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, createUserDTO, { new: true} );
        return updatedUser;
    }

    async deleteUser(userId: string):Promise<IUser>{
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        return deletedUser;
    }

}
