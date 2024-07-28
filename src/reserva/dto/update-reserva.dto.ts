import { PartialType } from '@nestjs/mapped-types';
import { $Enums, Reserva } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import { CreateReservaDto } from './create-reserva.dto';

export class UpdateReservaDto extends PartialType(CreateReservaDto) {}
export class UpdateReservaEstadoDto
  implements Pick<Reserva, 'estado' | 'reservaId'>
{
  @IsNotEmpty({ message: 'Por favor, informe o estado da reserva.' })
  estado: $Enums.ReservaStatus;
  @IsNotEmpty({ message: 'Por favor, informe o id da reserva.' })
  reservaId: number;
}
