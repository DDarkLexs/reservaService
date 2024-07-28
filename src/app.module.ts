import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { HashService } from './hash/hash.service';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [AuthModule, AuthorizationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, HashService],
})
export class AppModule {}
