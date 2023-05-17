import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from '../dto/create-uesrs.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findAll')
  getFindAll(): any {
    return this.usersService.findAll();
  }

  @Post('signOn')
  async add(@Body() userData: CreateUsersDto) {
    return this.usersService.add(userData);
  }
}
