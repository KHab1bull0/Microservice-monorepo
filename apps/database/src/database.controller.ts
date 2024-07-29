import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { SignUpDto } from './dto/signup.dto';



@Controller('user')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) { }

  @Post('signup')
  signUp(@Body() signupDto: SignUpDto) {
    return this.databaseService.create(signupDto)
  }
}
