import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Begruessung {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
