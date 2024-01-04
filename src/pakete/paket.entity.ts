import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  masse: string;

  @Column()
  gewicht: string;

  @Column()
  portopost: string;

  @Column()
  faktura: string;

}
