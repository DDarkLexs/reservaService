import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Public } from '../jwt/jwt.constant';
import { AuthUsuarioDto, CreateUsuarioDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signUp')
  @UsePipes(ValidationPipe)
  async createUser(@Body() data: CreateUsuarioDto) {
    const created = await this.authService.insertUtilizador(data);
    return created;
  }

  @Public()
  @Post('login')
  @UsePipes(ValidationPipe)
  async authUsuario(
    @Body() authUsuarioDto: AuthUsuarioDto,
  ) {
    return await this.authService.authUsuario(authUsuarioDto);
  }
}
