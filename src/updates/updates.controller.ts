// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Update } from './update.entity'; 
import { UpdatesService } from './updates.service';

@Controller('updates')
export class UpdatesController {
  constructor(private readonly updatesService: UpdatesService) { }

  @Get()
  async findAll(): Promise<Update[]> {
    return this.updatesService.readUpdates();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Update> {
    return this.updatesService.findUpdateById(id);
  }

  @Post()
  async create(@Body() update: Update): Promise<Update> {
    return this.updatesService.createUpdate(update);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newUpdate: Update): Promise<void> {
    await this.updatesService.updateUpdate(id, newUpdate);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.updatesService.deleteUpdate(id);
  }
}
