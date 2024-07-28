import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { HashService } from './hash/hash.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { ProvedorModule } from './provedor/provedor.module';

@Module({
  imports: [AuthModule, AuthorizationModule, ProvedorModule],
  controllers: [],
  providers: [PrismaService, HashService],
})
export class AppModule {}
