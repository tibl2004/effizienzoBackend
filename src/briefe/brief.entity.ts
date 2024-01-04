import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brief {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  format: string;

  @Column()
  dicke: string;

  @Column()
  gewicht: string;

  @Column()
  porto: string;

  @Column()
  faktura: string;

}
