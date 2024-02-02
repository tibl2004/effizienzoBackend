import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Begruessung } from './begruessung.entity';

@Injectable()
export class BegruessungenService {
  constructor(@InjectRepository(Begruessung) private begruessungRepo: Repository<Begruessung>) {}

  createBegruessung(begruessung: Begruessung): Promise<Begruessung> {
    return this.begruessungRepo.save(begruessung);
  }

  readBegruessungen(): Promise<Begruessung[]> {
    return this.begruessungRepo.find();
  }

  updateBegruessung(id: number, newBegruessung: Begruessung): Promise<UpdateResult> {
    return this.begruessungRepo.update(id, newBegruessung);
  }

  deleteBegruessung(id: number): Promise<DeleteResult> {
    return this.begruessungRepo.delete(id);
  }
}