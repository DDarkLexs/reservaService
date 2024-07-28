import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProvedorService } from 'src/provedor/provedor.service';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService, PrismaService, ProvedorService],
})
export class ReservaModule {}
