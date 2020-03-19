import { Controller, Post, Body, Get, Put, Delete, Param, UsePipes } from '@nestjs/common'
import { UserService } from './user.service'
// import { ApiTags } from '@nestjs/swagger'
import { User } from './user.entity'

// @ApiTags('user')
@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get()
  findAll () {
    return this.userService.findAll()
  }

  @Get(':id')
  getUser (@Param() params) {
    return this.userService.getUser(params.id)
  }

  @Post()
//   @UsePipes(new ValidationPipe())
  async createUser (@Body() user: User) {
    return this.userService.createUser(user)
  }

  @Delete(':id')
  deleteUser (@Param() params) {
    return this.userService.deleteUser(params.id)
  }

}
