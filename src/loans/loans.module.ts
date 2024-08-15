import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { Loan } from './entities/loan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpErrorFilter } from 'src/helpers/http-error.filter'
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  controllers: [LoansController],
  providers: [LoansService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ]
})
export class LoansModule {}
