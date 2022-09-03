import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  // imports: [UsersService],
  exports: [UsersService],
})
export class UserModule { }
