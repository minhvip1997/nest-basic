import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  async validate(username: string, password: string) {
    const userDB = await this.userService.findByUserName(username);
    if (userDB) {
      console.log('Inside validateUser');
      const matched = comparePasswords(password, userDB.password);
      // console.log(matched);

      if (matched) {
        return userDB;
      } else {
        return null;
      }
    }
    return null;
  }
}
