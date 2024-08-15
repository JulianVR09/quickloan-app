import { Module } from '@nestjs/common';
import { LoansModule } from './loans/loans.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [LoansModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
