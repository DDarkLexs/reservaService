import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvedorDto } from './dto/create-provedor.dto';
import { UpdateProvedorDto } from './dto/update-provedor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvedorService {

  constructor(private readonly prisma: PrismaService) {}
  create(createProvedorDto: CreateProvedorDto, utilizadorId:number) {
    
    return this.prisma.servico.create({
      data: {
        ...createProvedorDto,
        utilizadorId,
      }
    });
  }

  findAll(utilizadorId: number) {
    return this.prisma.servico.findMany({where: {utilizadorId}});
  }

  findOne(id: number) {
    const provedor = this.prisma.servico.findUnique({where: {servicoId: id}});
    if (!provedor) {
      throw new NotFoundException('Provedor não encontrado');
    }
    return provedor;
  }

  update(id: number, updateProvedorDto: UpdateProvedorDto) {
    return `This action updates a #${id} provedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} provedor`;
  }
}
