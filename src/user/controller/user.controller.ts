import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { SerializeUser } from '../type';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UsersService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.userservice.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUsersByUserName(@Param('username') username: string) {
    const user = this.userservice.getUserByUserName(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
}
