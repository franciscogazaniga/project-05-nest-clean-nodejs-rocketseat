import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false, // Can be use to hide the log of nest
  })

  const configService = app.get<ConfigService<Env, true>>(ConfigService) // app.get return a service of our application, in this case we use the ConfigService that is the service of ConfigModule
  const port = configService.get('PORT', { infer: true })

  await app.listen(port)
}
bootstrap()
