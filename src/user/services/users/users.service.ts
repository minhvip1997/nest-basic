import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { SerializeUser, User } from 'src/user/type';
import { Repository } from 'typeorm';
import { Users } from '../../../typeorm/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'minh', password: 'minh', email: 'minh@gmail.com' },
    { id: 2, username: 'minh1', password: 'minh1', email: 'minh@gmail.com' },
    { id: 3, username: 'minh2', password: 'minh2', email: 'minh@gmail.com' },
  ];

  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) { }

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUser: CreateUserDto) {
    console.log(createUser);

    const newUser = this.userRepository.create(createUser);
    console.log(newUser);
    return this.userRepository.save(newUser);
  }

  findByUserName(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: username } });
  }
}
