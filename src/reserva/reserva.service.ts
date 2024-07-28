import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { $Enums } from '@prisma/client';

@Injectable()
export class ReservaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReservaDto: CreateReservaDto, utilizadorId: number) {
    const servico = await this.prisma.servico.findFirst({
      where: { servicoId: createReservaDto.servicoId },
    });
    if (!servico) {
      throw new NotFoundException('Serviço inexistente');
    }

    const saldo = await this.consultarSaldoutilizador(utilizadorId);
    if (saldo < servico.preco) {
      throw new NotAcceptableException('Saldo insuficiente');
    }

    const debito = await this.debitarutilizador(utilizadorId, servico.preco);

    const reserva = await this.prisma.reserva.create({
      data: {
        ...createReservaDto,
        preco: servico.preco,
        clienteId: utilizadorId,
        estado: $Enums.ReservaStatus.PENDENTE,
      },
    });
    return reserva;
  }
  async consultarSaldoutilizador(utilizadorId: number): Promise<number> {
    const saldo = await this.prisma.utilizador.findFirst({
      where: { utilizadorId },
    });
    return saldo.saldo;
  }

  debitarutilizador(utilizadorId: number, preco: number) {
    return this.prisma.utilizador.update({
      where: { utilizadorId },
      data: { saldo: { decrement: preco } },
    });
  }

  async atualizarEstado(id: number,utilizadorId: number, estado: $Enums.ReservaStatus) {
    const data = await this.findOne(id);
    if (!data) {
      throw new NotFoundException('Reserva inexistente');
    }
    const reserva = this.prisma.reserva.update({
      where: { reservaId: id,clienteId: utilizadorId },
      data: { estado },
    })
    return reserva
  }

  findAll() {
    return `This action returns all reserva`;
  }

  async findOne(id: number) {
    const reserva = await this.prisma.reserva.findFirst({
      where: { reservaId: id },
    })

    return reserva;
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    return `This action updates a #${id} reserva`;
  }

  remove(id: number) {
    return `This action removes a #${id} reserva`;
  }
}
