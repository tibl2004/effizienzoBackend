import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Adjust the path based on your project structure
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


  updateUser(id: number, newUser: User): Promise<UpdateResult> {
    return this.userRepo.update(id, newUser);
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepo.delete(id);
  }
}