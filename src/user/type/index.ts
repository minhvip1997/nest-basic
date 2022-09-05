import { Exclude } from 'class-transformer';
import { Entity } from 'typeorm';
@Entity()
export class User {
  id: number;
  username: string;

  password: string;

  email: string;
}

export class SerializeUser {
  id: number;
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializeUser>) {
    Object.assign(this, partial);
  }
}
