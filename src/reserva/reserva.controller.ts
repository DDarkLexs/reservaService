import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { Autorizacao } from 'src/authorization/authorization.decorator';
import { CreateReservaDto } from './dto/create-reserva.dto';
import {
  UpdateReservaDto,
  UpdateReservaEstadoDto,
} from './dto/update-reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post('servico')
  @Autorizacao($Enums.UserType.CLIENTE)
  @UsePipes(ValidationPipe)
  create(@Body() createReservaDto: CreateReservaDto, @Req() req: any) {
    return this.reservaService.create(
      createReservaDto,
      req['usuario'].utilizadorId,
    );
  }

  @Patch('servico/estado')
  @Autorizacao($Enums.UserType.CLIENTE)
  @UsePipes(ValidationPipe)
  updateReserva(@Body() update: UpdateReservaEstadoDto, @Req() req: any) {
    return this.reservaService.atualizarEstado(
      update.reservaId,
      req['usuario'].utilizadorId,
      update.estado,
    );
  }

  @Get('/historico')
  @Autorizacao($Enums.UserType.CLIENTE)
  findAllDone(@Req() req: any) {
    return this.reservaService.findAllDone(req['usuario'].utilizadorId);
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
