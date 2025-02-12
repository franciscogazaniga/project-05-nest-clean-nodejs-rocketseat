import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      // .forRoot is necessary for pass configurations to the module ConfigModule
      validate: (env) => envSchema.parse(env), // The method parse throw an error if something goes wrong
      isGlobal: true, // Made environment variables accessibles in all modules
    }),
    AuthModule,
  ], // Configuration modules need the forRoot()
  controllers: [CreateAccountController, AuthenticateController],
  providers: [PrismaService],
})
export class AppModule {}
