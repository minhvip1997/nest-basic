import { forwardRef, Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    CustomersModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'nest-basic',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
