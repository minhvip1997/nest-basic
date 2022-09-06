import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Users } from 'src/typeorm';
import { UsersService } from 'src/user/services/users/users.service';
@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private readonly userservice: UsersService) {
        super();
    }

    serializeUser(user: Users, done: (err, users: Users) => void) {
        console.log('serialize User');

        done(null, user);
    }

    async deserializeUser(user: Users, done: (err, user: Users) => void) {
        console.log('deserialize User');
        const userDB = await this.userservice.findUserById(user.id);
        return userDB ? done(null, userDB) : done(null, null);
    }
}
