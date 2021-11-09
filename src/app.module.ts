import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
      ProductModule,
      MongooseModule.forRoot ('mongodb+srv://root:1234@cluster0.qf0yy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParse:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
