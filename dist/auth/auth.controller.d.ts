import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    login(loginUserDto: LoginUserDto, response: Response): Promise<{
        message: string;
        access_token: string;
    }>;
    logout(request: Request, response: Response): Promise<{
        message: string;
    }>;
}
