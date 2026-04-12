import {
  Body,
  Controller,
  Post,
  Get,
  HttpException,
  HttpStatus,
  Redirect,
  Request
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';
import { Public } from 'src/auth/decorators/public.decorator';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //@Public()注册
  @Public()
  @Post('register')
  async register(@Body() userDto: createUserDto) {
    const { username, password, nickname = '' } = userDto;
    try {
      return await this.userService.create({ username, password, nickname });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  // 获取用户信息
  @Get('info')
  async info(@Request() req) {
    return req.user;
  }
  // 登录
  @Public()
  @Post('login')
  @Redirect('/api/auth/login', 307) //POST 308永久 3077临时
  async login() {
    return;
  }
}
