import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializeUser, User } from 'src/user/type';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'minh', password: 'minh' },
    { id: 2, username: 'minh1', password: 'minh1' },
    { id: 3, username: 'minh2', password: 'minh2' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
