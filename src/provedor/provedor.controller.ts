import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, Req } from '@nestjs/common';
import { ProvedorService } from './provedor.service';
import { CreateProvedorDto } from './dto/create-provedor.dto';
import { UpdateProvedorDto } from './dto/update-provedor.dto';
import { Autorizacao } from 'src/authorization/authorization.decorator';
import { $Enums } from '@prisma/client';

@Controller('provedor')
export class ProvedorController {
  constructor(private readonly provedorService: ProvedorService) {}

  @Post("servico")
  @Autorizacao($Enums.UserType.PRESTADOR_DE_SERVICOS)
  @UsePipes(ValidationPipe)
  createServico(@Body() createProvedorDto: CreateProvedorDto, @Req() req: any) {
    return this.provedorService.create(createProvedorDto, req["usuario"].utilizadorId);
  }

  @Get("servico")
  @Autorizacao($Enums.UserType.PRESTADOR_DE_SERVICOS)
  findAll(@Req() req: any) {
    return this.provedorService.findAll(req["usuario"].utilizadorId);
  }

  @Get('servico/:id')
  findOne(@Param('id') id: number) {
    return this.provedorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvedorDto: UpdateProvedorDto) {
    return this.provedorService.update(+id, updateProvedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provedorService.remove(+id);
  }
}
