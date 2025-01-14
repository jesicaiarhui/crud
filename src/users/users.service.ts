import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  constructor (
    @InjectRepository (User)
    private userRepository: Repository <User>
  ){

  }
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save (createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy ({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id,updateUserDto);

  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
