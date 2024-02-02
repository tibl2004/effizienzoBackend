// users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from './feedback.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class FeedbacksService {
  constructor(@InjectRepository(Feedback) private feedbackRepo: Repository<Feedback>) {}

  createFeedback(feedback: Feedback): Promise<Feedback> {
    return this.feedbackRepo.save(feedback);
  }

  readFeedbacks(): Promise<Feedback[]> {
    return this.feedbackRepo.find();
  }

  async findFeedbackById(id: number): Promise<Feedback> {
    const feedback = await this.feedbackRepo.findOne({ where: { id } }); // Verwende ein Objekt mit 'where'-Eigenschaft
    if (!feedback) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return feedback;
  }


  updateFeedback(id: number, newFeedback: Feedback): Promise<UpdateResult> {
    return this.feedbackRepo.update(id, newFeedback);
  }

  deleteFeedback(id: number): Promise<DeleteResult> {
    return this.feedbackRepo.delete(id);
  }
}
