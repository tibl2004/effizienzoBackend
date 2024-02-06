// users/users.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TeamMember } from './teammember.entity'; 
import { TeamMembersService } from './teammembers.service';

@Controller('teammembers')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) { }

  @Get()
  async findAll(): Promise<TeamMember[]> {
    return this.teamMembersService.readTeamMembers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TeamMember> {
    return this.teamMembersService.findTeamMemberById(id);
  }

  @Post()
  async create(@Body() teamMember: TeamMember): Promise<TeamMember> {
    return this.teamMembersService.createTeamMember(teamMember);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newTeamMember: TeamMember): Promise<void> {
    await this.teamMembersService.updateTeamMember(id, newTeamMember);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.teamMembersService.deleteTeamMember(id);
  }
}
