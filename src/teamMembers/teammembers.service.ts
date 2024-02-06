// users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamMember } from './teammember.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TeamMembersService {
  constructor(@InjectRepository(TeamMember) private teamMemberRepo: Repository<TeamMember>) {}

  createTeamMember(teamMember: TeamMember): Promise<TeamMember> {
    return this.teamMemberRepo.save(teamMember);
  }

  readTeamMembers(): Promise<TeamMember[]> {
    return this.teamMemberRepo.find();
  }

  async findTeamMemberById(id: number): Promise<TeamMember> {
    const teamMember = await this.teamMemberRepo.findOne({ where: { id } }); // Verwende ein Objekt mit 'where'-Eigenschaft
    if (!teamMember) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return teamMember;
  }


  updateTeamMember(id: number, newTeamMember: TeamMember): Promise<UpdateResult> {
    return this.teamMemberRepo.update(id, newTeamMember);
  }

  deleteTeamMember(id: number): Promise<DeleteResult> {
    return this.teamMemberRepo.delete(id);
  }
}
