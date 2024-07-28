import { Module } from '@nestjs/common';
import { ProvedorService } from './provedor.service';
import { ProvedorController } from './provedor.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProvedorController],
  providers: [ProvedorService, PrismaService],
})
export class ProvedorModule {}
