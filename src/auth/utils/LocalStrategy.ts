import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string) {
        // console.log('minh');
        // console.log('minh', username);
        // console.log('minh', password);

        const user = await this.authService.validate(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
