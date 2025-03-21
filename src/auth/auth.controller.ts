import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
  ) {
    // console.log(registerDto);
    return this.authService.registrer(registerDto);
  }
}
