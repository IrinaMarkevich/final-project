import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor (@InjectRepository(User) private usersRepository: Repository<User>) { }

  async findAll (): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['products'] })
  }

  async findUser (id: string, password: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id: id,
        password: password
      },
      relations: ['products'] 
    })
  }

  async getUser (_id: string): Promise<User[]> {
    return await this.usersRepository.find({
      relations: ['missions'],
      where: [{ id: _id }]
    })
  }

  async createUser (user) {
    return await this.usersRepository.save(user)
  }

  async deleteUser (_id) {
    return await this.usersRepository.delete(_id)
  }
}
