import {
  Controller,
  Post,
  Body,
  HttpCode,
  Res,
  Get,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.firstName,
      createUserDto.lastName,
    );
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { access_token } = await this.authService.login(
      loginUserDto.email,
      loginUserDto.password,
    );

    response.cookie('jwt', access_token, {
      httpOnly: true,
      // domain: '.localhost', // remove this in local dev unless needed
      secure: false, // Set to true in production with HTTPS
      sameSite: 'lax', // Change to 'strict' or 'none' based on use case
      maxAge: 60 * 60 * 1000,
    });

    return { message: 'Login successful', access_token };
  }

  @Get('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    });
    return { message: 'Logout successful' };
  }
}
