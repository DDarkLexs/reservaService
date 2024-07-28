import { Servico } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateProvedorDto
  implements Omit<Servico, 'servicoId' | 'utilizadorId'>
{
  @IsNotEmpty({ message: 'O nome do serviço é obrigatório' })
  nome: string;
  @IsNotEmpty({ message: 'A descrição do serviço é obrigatória' })
  descricao: string;
  @IsNotEmpty({ message: 'O preço do serviço é obrigatório' })
  @IsNumber({}, { message: 'O preço do serviço deve ser um número' })
  preco: number;
}
