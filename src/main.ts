import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false, // Can be use to hide the log of nest
  })
  await app.listen(3333)
}
bootstrap()
