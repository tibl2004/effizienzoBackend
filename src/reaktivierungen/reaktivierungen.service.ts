import { Injectable } from '@nestjs/common';
import { Reaktivierung } from './reaktivierung.entity'; // Adjust the path based on your project structure
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ReaktiverungenService {
  constructor(@InjectRepository(Reaktivierung) private reaktivierungRepo: Repository<Reaktivierung>) {}


  createReaktivierung(reaktivierung: Reaktivierung): Promise<Reaktivierung> {
    return this.reaktivierungRepo.save(reaktivierung);
  }

  readReaktivierungen(): Promise<Reaktivierung[]> {
    return this.reaktivierungRepo.find();
  }
  


  updateReaktivierung(id: number, newReaktivierung: Reaktivierung): Promise<UpdateResult> {
    return this.reaktivierungRepo.update(id, newReaktivierung);
  }

  deleteReaktivierung(id: number): Promise<DeleteResult> {
    return this.reaktivierungRepo.delete(id);
  }
}