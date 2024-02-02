import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BegruessungenController } from './begruessungen.controller';
import { BegruessungenService } from './begruessungen.service';
import { Begruessung } from './begruessung.entity'; // Passe den Pfad basierend auf deiner Projektstruktur an

@Module({
  imports: [TypeOrmModule.forFeature([Begruessung])],
  controllers: [BegruessungenController],
  providers: [BegruessungenService],
  exports: [TypeOrmModule],
})
export class BegruessungModule {}
