import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dokument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}
