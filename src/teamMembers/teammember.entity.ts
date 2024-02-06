import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vorname: string;

  @Column()
  nachname: string;

  @Column()
  email: string;

  @Column()
  telefonnummer: string;

  @Column()
  bildUrl: string;
}
