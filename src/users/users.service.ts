import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>) {}

    async create(CreateUserDto: CreateUserDto){
        const newUser = this.usersRepository.create(CreateUserDto)
        return await this.usersRepository.save(newUser)
    }

    async findAll(){
        return await this.usersRepository.find();
    }

    async findOne(id: number){
        return await this.usersRepository.findOne({where: {id}});
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.usersRepository.update(id, updateUserDto)
    }

    async remove(id: number){
        return await this.usersRepository.delete(id)
    }

    async findByEmail(email: string){
        return await this.usersRepository.findOne({where: {email}});
    }
}
