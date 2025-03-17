import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registrer({ password, email, name }: RegisterDto) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('Email already exists');
    }


    await this.userService.create({ password, email, name });
    return {
      message: 'User created successfully',
    };
  }
  login() {
    return 'login';
  }
}
