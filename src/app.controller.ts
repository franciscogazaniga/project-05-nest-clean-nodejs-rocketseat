import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller() // Aqui também pode ser passado um parâmetro, que servirá como um prefixo para todas as rotas dele.
export class AppController {
  constructor(private readonly appService: AppService) {} // Inversão de dependência aqui.

  // Quando o usuário fizer a requisição get, o método getHello() será chamado.
  // Como nenhum parâmetro é passado no decorator Get(), fica entendido que o
  // getHello() será a rota raíz. Os parâmetros passados se tornarão o nome da rota.
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
