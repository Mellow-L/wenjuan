import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from '../user/dto/createUser.dto';
import { Public } from './decorators/public.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() userInfo: createUserDto) {
    const { username, password } = userInfo;
    return await this.authService.singin(username, password);
  }
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
