// users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Dokument } from './dokument.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DokumenteService {
  constructor(@InjectRepository(Dokument) private dokumentRepo: Repository<Dokument>) {}

  createDokument(dokument: Dokument): Promise<Dokument> {
    return this.dokumentRepo.save(dokument);
  }

  readDokumente(): Promise<Dokument[]> {
    return this.dokumentRepo.find();
  }

  async findDokumentById(id: number): Promise<Dokument> {
    const dokument = await this.dokumentRepo.findOne({ where: { id } }); // Verwende ein Objekt mit 'where'-Eigenschaft
    if (!dokument) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return dokument;
  }


  updateDokument(id: number, newDokument: Dokument): Promise<UpdateResult> {
    return this.dokumentRepo.update(id, newDokument);
  }

  deleteDokument(id: number): Promise<DeleteResult> {
    return this.dokumentRepo.delete(id);
  }
}
