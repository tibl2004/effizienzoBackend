// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Paket } from './paket.entity'; // Adjust the path based on your project structure
import { PaketeService } from './pakete.service';

@Controller('pakete')
export class PaketeController {
  constructor(private readonly paketeService: PaketeService) { }

  @Get()
  async findAll(): Promise<Paket[]> {
    return this.paketeService.readPakete();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Paket> {
    return this.paketeService.readPaketById(id);
  }



  @Post()
  async create(@Body() paket: Paket): Promise<Paket> {
    return this.paketeService.createPaket(paket);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newPaket: Paket): Promise<void> {
    await this.paketeService.updatePaket(id, newPaket);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.paketeService.deletePaket(id);
  }
}