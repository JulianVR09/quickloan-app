import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansServices: LoansService){}

  @Post()
  createLoan(@Body() createLoan: CreateLoanDto) {
    return this.loansServices.create(createLoan);
  }

  @Get()
  findAll() {
    return this.loansServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loansServices.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoan: CreateLoanDto) {
    return this.loansServices.update(+id, updateLoan);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loansServices.remove(+id);
  }

  @Get(':userId')
  calculateLoanRisk(@Param('userId') userId: string) {
    return this.loansServices.calculateLoanRisk(+userId);
  }
}
