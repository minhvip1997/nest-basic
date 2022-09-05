import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm';
import { UserController } from './controller/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [UsersService],
})
export class UserModule { }
