import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.qf0yy.mongodb.net/onlypans_DB?retryWrites=true&w=majority',{
    useNewUrlParser: true
    }),
    ShoppingCartModule,
    UserModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
