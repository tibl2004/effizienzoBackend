// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Begruessung } from './begruessung.entity'; // Adjust the path based on your project structure
import { BegruessungenService } from './begruessungen.service';

@Controller('begruessung')
export class BegruessungenController {
  constructor(private readonly begruessungenService: BegruessungenService) { }

  @Get()
  async findAll(): Promise<Begruessung[]> {
    return this.begruessungenService.readBegruessungen();
  }


  @Post()
  async create(@Body() begruessung: Begruessung): Promise<Begruessung> {
    return this.begruessungenService.createBegruessung(begruessung);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newBegruessung: Begruessung): Promise<void> {
    await this.begruessungenService.updateBegruessung(id, newBegruessung);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.begruessungenService.deleteBegruessung(id);
  }
}