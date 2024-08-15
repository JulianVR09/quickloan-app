import { Controller, Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersService){}

    @Post()
    create(@Body() createUser: CreateUserDto){
        return this.usersServices.create(createUser);
    }

    @Get()
    findAll(){
        return this.usersServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.usersServices.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUser: UpdateUserDto){
        return this.usersServices.update(+id, updateUser);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.usersServices.remove(+id);
    }
}
