import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CartItemService } from 'src/cart-item/cart-item.service';
import { CreateProductDTO } from 'src/cart-item/dto/create_product.dto';
import { IshoppingCart } from './interfaces/shoppingCart.interface';

@Injectable()
export class ShoppingCartService {
        constructor (@InjectModel('cart') private readonly cartModel: Model<IshoppingCart>,  private readonly cartItemService: CartItemService ){}
        private cart = new this.cartModel();

        getCart(): Promise<IshoppingCart[]> { //Este servicio solo debe poder usarlo el admin del sistema
                const cart = this.cartModel.find();
                return Promise.resolve(cart);
        }
        async addCartItem(createProductDTO:CreateProductDTO, userId:string){
                const item = await this.cartItemService.createCartItem(createProductDTO);
                this.cart.items.push(item);
                this.cart.user = userId;
                this.cart.total = item.subtotal;
                await this.cart.save();          
                return this.cart;
        }

}