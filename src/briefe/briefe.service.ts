import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Brief } from './brief.entity';

@Injectable()
export class BriefeService {
  constructor(@InjectRepository(Brief) private briefRepo: Repository<Brief>) {}


  createBrief(brief: Brief): Promise<Brief> {
    return this.briefRepo.save(brief);
  }

  readBriefe(): Promise<Brief[]> {
    return this.briefRepo.find();
  }

  readBriefById(id: number): Promise<Brief> {
    return this.briefRepo.findOne(id);
  }
  


  updateBrief(id: number, newBrief: Brief): Promise<UpdateResult> {
    return this.briefRepo.update(id, newBrief);
  }

  deleteBrief(id: number): Promise<DeleteResult> {
    return this.briefRepo.delete(id);
  }
}