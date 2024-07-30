import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { log } from 'console';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class DatabaseService {
  constructor(private readonly prisma: PrismaService) {

  }
  async create(signUpDto: SignUpDto) {
    const user = await this.prisma.user.create({
      data: signUpDto
    });
    return user
  }

  async login(loginDto: LoginDto) {
    const { email } = loginDto;
    return await this.prisma.user.findFirst({ where: { email: email } });
  }

  async findOne(loginDto: LoginDto){
    
    const n = await this.prisma.user.findFirst({where: {email: loginDto.email}});
    
    if(n == null){
      return {message: 'not found'}
    }
    return {...n, message: "ok"}
  }
}
