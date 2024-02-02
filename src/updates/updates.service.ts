// users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Update } from './update.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UpdatesService {
  constructor(@InjectRepository(Update) private updateRepo: Repository<Update>) {}

  createUpdate(update: Update): Promise<Update> {
    return this.updateRepo.save(update);
  }

  readUpdates(): Promise<Update[]> {
    return this.updateRepo.find();
  }

  async findUpdateById(id: number): Promise<Update> {
    const update = await this.updateRepo.findOne({ where: { id } }); // Verwende ein Objekt mit 'where'-Eigenschaft
    if (!update) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return update;
  }


  updateUpdate(id: number, newUpdate: Update): Promise<UpdateResult> {
    return this.updateRepo.update(id, newUpdate);
  }

  deleteUpdate(id: number): Promise<DeleteResult> {
    return this.updateRepo.delete(id);
  }
}
