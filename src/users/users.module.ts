import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from 'src/helpers/http-error.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, 
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ]
})
export class UsersModule {}
