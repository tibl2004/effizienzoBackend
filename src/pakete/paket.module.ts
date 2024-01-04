// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaketeController } from './pakete.controller';
import { PaketeService } from './pakete.service';
import { Paket } from './paket.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Paket])],
  controllers: [PaketeController],
  providers: [PaketeService],
  exports: [TypeOrmModule],
})
export class PaketModule {}