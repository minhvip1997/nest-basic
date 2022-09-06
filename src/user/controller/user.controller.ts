import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { filter } from 'rxjs';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UsersNotFounfException } from '../exceptions/Usersnotfound.exception';
import { HttpExceptionFilter } from '../filters/HttpException.filter';
import { UsersService } from '../services/users/users.service';
import { SerializeUser } from '../type';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UsersService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthenticatedGuard)
  @Get('')
  getUsers() {
    return this.userservice.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('username/:username')
  getUsersByUserName(@Param('username') username: string) {
    const user = this.userservice.getUserByUserName(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getUsersById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userservice.getUserById(id);
    if (user) return new SerializeUser(user);
    else {
      throw new UsersNotFounfException();
    }
    // else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUser: CreateUserDto) {
    return this.userservice.createUser(createUser);
  }
}
