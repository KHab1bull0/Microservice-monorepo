import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';



@Controller('user')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) { }

  @Post('signup')
  async signUp(@Body() signupDto: SignUpDto) {
    try {
      return await this.databaseService.create(signupDto)
    } catch (e) {
      return { status: 500, error: e }
    }
  }


  @Post("signin")
  async signin(@Body() loginDto: LoginDto) {
    try {
      return await this.databaseService.login(loginDto);
    } catch (e) {
      return new HttpException("Database login qilishda xatolik", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("findByEmail")
  async findOne(@Body() loginDto: LoginDto) {
    return await this.databaseService.findOne(loginDto);
  }
  
}
