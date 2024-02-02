// users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  readUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } }); // Verwende ein Objekt mit 'where'-Eigenschaft
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async loginUser(username: string, user: User): Promise<void> {
    const existingUser = await this.userRepo
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .andWhere('user.password = :password', { password: user.password }) // Vorausgesetzt, dass das Passwort ebenfalls überprüft werden soll
      .getOne();
    
    if (existingUser) {
      existingUser.loggedIn = true;
      await this.userRepo.save(existingUser);
    }
  }

  updateUser(id: number, newUser: User): Promise<UpdateResult> {
    return this.userRepo.update(id, newUser);
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepo.delete(id);
  }
}
