import { Injectable } from '@nestjs/common';
import { Erfassen } from './erfassen.entity'; // Adjust the path based on your project structure
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ErfassenService {
  constructor(@InjectRepository(Erfassen) private erfassenRepo: Repository<Erfassen>) {}


  createErfassen(erfassen: Erfassen): Promise<Erfassen> {
    return this.erfassenRepo.save(erfassen);
  }

  readErfassen(): Promise<Erfassen[]> {
    return this.erfassenRepo.find();
  }

  readErfassenById(id: number): Promise<Erfassen> {
    return this.erfassenRepo.findOne(id);
  }
  


  updateErfassen(id: number, newErfassen: Erfassen): Promise<UpdateResult> {
    return this.erfassenRepo.update(id, newErfassen);
  }

  deleteErfassen(id: number): Promise<DeleteResult> {
    return this.erfassenRepo.delete(id);
  }
}