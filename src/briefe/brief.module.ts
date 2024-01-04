// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BriefeController } from './briefe.controller';
import { BriefeService } from './briefe.service';
import { Brief } from './brief.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Brief])],
  controllers: [BriefeController],
  providers: [BriefeService],
  exports: [TypeOrmModule],
})
export class BriefModule {}