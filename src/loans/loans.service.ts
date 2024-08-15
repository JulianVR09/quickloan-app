import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import {CreateLoanDto} from './dto/create-loan.dto'
import {UpdateLoanDto} from './dto/update-loan.dto'

@Injectable()
export class LoansService {
  constructor(@InjectRepository(Loan) private loanRepository: Repository<Loan>,
  @InjectRepository(User) private userRepository: Repository<User>){}

  async create(createLoanDto: CreateLoanDto){
    const newLoan = this.loanRepository.create(createLoanDto)
    return await this.loanRepository.save(newLoan)
  }

  async findAll(){
    return await this.loanRepository.find()
  }

  async findOne(id: number){
    return await this.loanRepository.findOne({where: {id}})
  }

  async update(id: number, updateLoan: UpdateLoanDto){
    return await this.loanRepository.update(id, updateLoan)
  }

  async remove(id: number){
    return await this.loanRepository.delete(id)
  }

  async calculateLoanRisk(userId: number): Promise<string>{
    if(!userId){
      throw new Error(`User Id is required`)
    }

    const user = await this.userRepository.findOne({where: {id: userId}})

    if(!user){
      throw new Error(`User with ID ${userId} not found`)
    }

    const credit = user.credit;

    if(credit>700){
      return `Low Risk`
    } else {
      return `High Risk`
    }
  }
}