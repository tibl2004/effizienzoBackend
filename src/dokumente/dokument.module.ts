// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DokumenteController } from './dokumente.controller';
import { DokumenteService } from './dokumente.service';
import { Dokument } from './dokument.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Dokument])],
  controllers: [DokumenteController],
  providers: [DokumenteService],
  exports: [TypeOrmModule],
})
export class DokumentModule {}