// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ReaktiverungenService } from './reaktivierungen.service';
import { Reaktivierung } from './reaktivierung.entity';

@Controller('reaktivierungen')
export class ReaktivierungenController {
  constructor(private readonly reaktivierungenService: ReaktiverungenService) { }

  @Get()
  async findAll(): Promise<Reaktivierung[]> {
    return this.reaktivierungenService.readReaktivierungen();
  }


  @Post()
  async create(@Body() reaktivierung: Reaktivierung): Promise<Reaktivierung> {
    return this.reaktivierungenService.createReaktivierung(reaktivierung);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newReaktivierung: Reaktivierung): Promise<void> {
    await this.reaktivierungenService.updateReaktivierung(id, newReaktivierung);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.reaktivierungenService.deleteReaktivierung(id);
  }
}