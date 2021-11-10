import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
    imports: [
      ProductModule,
      MongooseModule.forRoot ('mongodb+srv://root:1234@cluster0.qf0yy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParse:true
    }),
      UserModule,
      ShoppingCartModule,
      InvoiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
