import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  async validate(username: string, password: string) {
    const userDB = await this.userService.findByUserName(username);
    if (userDB && userDB.password === password) {
      //   console.log(userDB);
      return userDB;
    }
    return null;
  }
}
