// user.controller.ts
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): User | undefined {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User): User {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updatedUser: Partial<User>): User | undefined {
    return this.userService.updateUser(id, updatedUser);
  }
}
