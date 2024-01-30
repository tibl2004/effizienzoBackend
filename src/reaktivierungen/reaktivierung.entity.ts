import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reaktivierung {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ type: 'date' })
  datum: Date;
}
