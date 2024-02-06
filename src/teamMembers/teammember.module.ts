// users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMembersController } from './teammembers.controller';
import { TeamMembersService } from './teammembers.service';
import { TeamMember } from './teammember.entity'; // Adjust the path based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([TeamMember])],
  controllers: [TeamMembersController],
  providers: [TeamMembersService],
  exports: [TypeOrmModule],
})
export class TeamMemberModule {}