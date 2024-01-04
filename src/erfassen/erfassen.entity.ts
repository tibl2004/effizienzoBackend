
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Erfassen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

}