// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdatesController } from './updates.controller';
import { UpdatesService } from './updates.service';
import { Update } from './update.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Update])],
  controllers: [UpdatesController],
  providers: [UpdatesService],
  exports: [TypeOrmModule],
})
export class UpdateModule {}