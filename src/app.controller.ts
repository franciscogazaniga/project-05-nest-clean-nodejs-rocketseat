import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller() // Aqui também pode ser passado um parâmetro, que servirá como um prefixo para todas as rotas dele.
export class AppController {
  constructor(
    private appService: AppService,
    private prisma: PrismaService,
  ) {} // Inversão de dependência aqui.

  // Quando o usuário fizer a requisição get, o método getHello() será chamado.
  // Como nenhum parâmetro é passado no decorator Get(), fica entendido que o
  // getHello() será a rota raíz. Os parâmetros passados se tornarão o nome da rota.
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('/hello')
  async store() {
    return await this.prisma.user.findMany()
  }
}
