import { Injectable } from '@nestjs/common';
import { Paket } from './paket.entity'; // Adjust the path based on your project structure
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PaketeService {
  constructor(@InjectRepository(Paket) private paketRepo: Repository<Paket>) {}


  createPaket(paket: Paket): Promise<Paket> {
    return this.paketRepo.save(paket);
  }

  readPakete(): Promise<Paket[]> {
    return this.paketRepo.find();
  }

  
  


  updatePaket(id: number, newPaket: Paket): Promise<UpdateResult> {
    return this.paketRepo.update(id, newPaket);
  }

  deletePaket(id: number): Promise<DeleteResult> {
    return this.paketRepo.delete(id);
  }
}