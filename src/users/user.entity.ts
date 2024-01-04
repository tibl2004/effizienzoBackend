
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vorname: string;

  @Column()
  nachname: string;

  @Column()
  username: number;

  @Column()
  password: string;

  @Column()
  loggedIn: boolean;
}