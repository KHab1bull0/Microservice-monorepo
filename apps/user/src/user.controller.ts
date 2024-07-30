import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './Dto/signup.dto';
import { LoginDto } from './Dto/login.dto';
import { AuthGuard } from './middleware/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('signup')
  async signup(@Body() signup: SignUpDto) {
    return await this.userService.create(signup);
  }

  @Post("signin")
  async signin(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }


  @UseGuards(AuthGuard)
  @Get('/getme')
  async getMe(@Request() req) {
    return await this.userService.getme(req.user)
  }
}
