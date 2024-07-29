import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class DatabaseService {
  constructor(private readonly prisma: PrismaService) {

  }
  create(signUpDto: SignUpDto) {
    try {
      const user = this.prisma.user.create({
        data: signUpDto
      });
      return user
    } catch (error) {
      return {status: 500, message: "Serverda xatolik", error: error}
    }

  }
}
