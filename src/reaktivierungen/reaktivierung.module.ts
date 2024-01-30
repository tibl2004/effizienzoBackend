// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReaktivierungenController } from './reaktivierungen.controller';
import { ReaktiverungenService } from './reaktivierungen.service';
import { Reaktivierung } from './reaktivierung.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Reaktivierung])],
  controllers: [ReaktivierungenController],
  providers: [ReaktiverungenService],
  exports: [TypeOrmModule],
})
export class ErfassenModule {}