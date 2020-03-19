import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../user//user.entity'
import { JwtModule } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller'

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret12356789'
    })
  ],
  providers: [UserService, AuthService],
  controllers: [AuthController],
  exports: [TypeOrmModule]
})
export class AuthModule {}
