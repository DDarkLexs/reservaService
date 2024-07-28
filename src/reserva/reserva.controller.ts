import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Autorizacao } from 'src/authorization/authorization.decorator';
import { $Enums } from '@prisma/client';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post("servico")
  @Autorizacao($Enums.UserType.CLIENTE)
  @UsePipes(ValidationPipe)
  create(@Body() createReservaDto: CreateReservaDto,@Req() req: any) {
    return this.reservaService.create(createReservaDto,req["usuario"].utilizadorId);
  }
  

  @Get()
  findAll() {
    return this.reservaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservaService.remove(+id);
  }
}
