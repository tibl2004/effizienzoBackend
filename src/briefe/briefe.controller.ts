// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Brief } from './brief.entity'; // Adjust the path based on your project structure
import { BriefeService } from './briefe.service';

@Controller('briefe')
export class BriefeController {
  constructor(private readonly briefeService: BriefeService) { }

  @Get()
  async findAll(): Promise<Brief[]> {
    return this.briefeService.readBriefe();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Brief> {
    return this.briefeService.readBriefById(id);
  }



  @Post()
  async create(@Body() brief: Brief): Promise<Brief> {
    return this.briefeService.createBrief(brief);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newBrief: Brief): Promise<void> {
    await this.briefeService.updateBrief(id, newBrief);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.briefeService.deleteBrief(id);
  }
}