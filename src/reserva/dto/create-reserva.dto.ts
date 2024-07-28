import { Reserva } from '@prisma/client';

export class CreateReservaDto implements Omit<Reserva, 'reservaId'> {
  clienteId: number;
  preco: number;
  provedorId: number;
  servicoId: number;
}
