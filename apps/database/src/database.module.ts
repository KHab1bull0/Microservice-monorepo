import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [DatabaseService, PrismaService],
})
export class DatabaseModule { }
