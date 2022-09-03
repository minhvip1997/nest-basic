import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializeUser, User } from 'src/user/type';

@Injectable()
export class UsersService {
  private users: User[] = [
    { username: 'minh', password: 'minh' },
    { username: 'minh1', password: 'minh1' },
    { username: 'minh2', password: 'minh2' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
