import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {}

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session.id);
    session.authenticated = true;
    return session;
  }

  // @UseGuards(AuthenticatedGuard)
  // @Get('status')
  // async getAuthStatus(@Req() req: Request) {
  //     console.log('req', req.user);

  //     return req.user;
  // }
}
