import { Exclude } from 'class-transformer';

export class User {
  username: string;

  password: string;
}

export class SerializeUser {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializeUser>) {
    Object.assign(this, partial);
  }
}
