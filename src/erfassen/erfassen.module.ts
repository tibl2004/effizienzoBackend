// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErfassenController } from './erfassen.controller';
import { ErfassenService } from './erfassen.service';
import { Erfassen } from './erfassen.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Erfassen])],
  controllers: [ErfassenController],
  providers: [ErfassenService],
  exports: [TypeOrmModule],
})
export class ErfassenModule {}