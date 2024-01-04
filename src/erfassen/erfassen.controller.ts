// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ErfassenService } from './erfassen.service';
import { Erfassen } from './erfassen.entity';

@Controller('erfassen')
export class ErfassenController {
  constructor(private readonly erfassenService: ErfassenService) { }

  @Get()
  async findAll(): Promise<Erfassen[]> {
    return this.erfassenService.readErfassen();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Erfassen> {
    return this.erfassenService.readErfassenById(id);
  }



  @Post()
  async create(@Body() erfassen: Erfassen): Promise<Erfassen> {
    return this.erfassenService.createErfassen(erfassen);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newErfassen: Erfassen): Promise<void> {
    await this.erfassenService.updateErfassen(id, newErfassen);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.erfassenService.deleteErfassen(id);
  }
}