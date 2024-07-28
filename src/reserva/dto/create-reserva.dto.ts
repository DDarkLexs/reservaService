import { Reserva } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateReservaDto implements Omit<Reserva, 'reservaId' | 'preco' | 'clienteId'|"estado"> {
//  @IsNotEmpty({ message: 'Por favor, informe o id do cliente.' })
//   clienteId: number;
  @IsNotEmpty({ message: 'Por favor, informe o id do serviço.' })
  servicoId: number;
  
}
