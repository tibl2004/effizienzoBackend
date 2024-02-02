// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Feedback } from './feedback.entity'; 
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) { }

  @Get()
  async findAll(): Promise<Feedback[]> {
    return this.feedbacksService.readFeedbacks();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Feedback> {
    return this.feedbacksService.findFeedbackById(id);
  }

  @Post()
  async create(@Body() feedback: Feedback): Promise<Feedback> {
    return this.feedbacksService.createFeedback(feedback);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newFeedback: Feedback): Promise<void> {
    await this.feedbacksService.updateFeedback(id, newFeedback);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.feedbacksService.deleteFeedback(id);
  }
}
