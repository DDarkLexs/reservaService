import { $Enums, Utilizador } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

export class CreateUsuarioDto
  implements Omit<Utilizador, 'created' | 'updated' | 'utilizadorId'>
{
  @IsNotEmpty({ message: 'Por favor, informe o seu nome.' })
  nome: string;

  @IsNotEmpty({ message: 'Por favor, informe o seu NIF.' })
  nif: string;
  @IsOptional({ message: 'Por favor, informe o seu saldo.' })
  @IsNumber({}, { message: 'O saldo deve ser um número.' })
  saldo: number;

  @IsEmail({}, { message: 'Por favor, informe um email válido.' })
  email: string;


  @IsEnum($Enums.UserType, {
    message: 'Por favor, selecione um tipo de usuário válido (CLIENTE).',
  })
  tipo: $Enums.UserType;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  @IsNotEmpty({ message: 'Por favor, informe a sua senha.' })
  senha: string;
}

export class AuthUsuarioDto implements Pick<Utilizador, 'senha' | 'email'> {
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  @IsNotEmpty({ message: 'Por favor, informe a sua senha.' })
  senha: string;
  @IsEmail({}, { message: 'Por favor, informe um email válido.' })
  email: string;
}


