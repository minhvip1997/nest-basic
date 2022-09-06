import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm';
import { UsersService } from 'src/user/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './utils/Localstrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy, SessionSerializer],
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
})
export class AuthModule { }
