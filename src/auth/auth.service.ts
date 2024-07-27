import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthUsuarioDto, CreateUsuarioDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService,
  ) {}
  async insertUtilizador(data: CreateUsuarioDto) {
    const existingUser = await this.prisma.utilizador.findUnique({
      where: {
        email: data.email, // Supondo que telefone seja um identificador único
      },
    });
    if (existingUser) {
      throw new ConflictException('já existe um usuário com este email'); // Lança um erro se o usuário já existir
    }
    data.senha = await this.hashService.hashPassword(data.senha);
    const newUsuario = await this.prisma.utilizador.create({
      data: data,
    });

    return newUsuario;
  }
  async authUsuario(authUsuario: AuthUsuarioDto) {
    const { senha, email } = authUsuario;

    // Recupera o usuário do banco de dados usando o contacto fornecido
    const usuarioNoBanco = await this.prisma.utilizador.findUnique({
      where: {
        email,
      },

    });
    if (!usuarioNoBanco) {
      throw new NotFoundException('Usuário não encontrado!'); // Trate como preferir (ex.: retornando um erro)
    }
    // Exemplo de validação da senha (se estiver usando criptografia)
    const senhaValida = await this.hashService.comparePasswords(senha, usuarioNoBanco.senha);


    if (!senhaValida) {
      throw new UnauthorizedException('Senha incorreta'); // Trate como preferir (ex.: retornando um erro)
    }

    const token = await this.jwtService.signAsync(usuarioNoBanco);

    // Retorna os dados do usuário autenticado
    const {  ...usuario } = usuarioNoBanco;
    return {
      usuario,
      token,
    };
  }
  async validateUserPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await this.hashService.comparePasswords(password, hashedPassword);
  }
}
