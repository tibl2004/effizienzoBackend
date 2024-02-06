// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Dokument } from './dokument.entity'; 
import { DokumenteService } from './dokumente.service';

@Controller('dokumente')
export class DokumenteController {
  constructor(private readonly dokumenteService: DokumenteService) { }

  @Get()
  async findAll(): Promise<Dokument[]> {
    return this.dokumenteService.readDokumente();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Dokument> {
    return this.dokumenteService.findDokumentById(id);
  }

  @Post()
  async create(@Body() dokument: Dokument): Promise<Dokument> {
    return this.dokumenteService.createDokument(dokument);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newDokument: Dokument): Promise<void> {
    await this.dokumenteService.updateDokument(id, newDokument);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.dokumenteService.deleteDokument(id);
  }
}
