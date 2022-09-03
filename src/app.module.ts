import { forwardRef, Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/controller/user.controller';

@Module({
  imports: [CustomersModule, UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
