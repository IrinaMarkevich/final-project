/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { User } from '../user/user.entity'

@Injectable()
export class AuthService {
  constructor (
        private readonly userService: UserService,
        private readonly jwtService: JwtService
  ) { }

  private async validate (userData: User): Promise<User> {
    return await this.userService.findUser(userData.id, userData.password)
  }

  public async login (user: User): Promise< any | { status: number }> {
    return this.validate(user).then((userData) => {
      if (!userData) {
        return { status: 404 }
      }
      const payload = `${userData.id}`
      const accessToken = this.jwtService.sign(payload)

      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200
      }
    })
  }

  public async register (user: User): Promise<any> {
    return this.userService.createUser(user)
  }
}
