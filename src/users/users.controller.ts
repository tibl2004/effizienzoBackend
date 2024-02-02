// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { User } from './user.entity'; 
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.readUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findUserById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newUser: User): Promise<void> {
    await this.usersService.updateUser(id, newUser);
  }

  @Put('login/:username')
  async loginUser(@Param('username') username: string, @Body() user: User): Promise<void> {
    await this.usersService.loginUser(username, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
