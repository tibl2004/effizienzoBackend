import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Update {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  datum: Date;

  @Column()
  titel: string;

  @Column()
  text: string;

  get formattedDate(): string {
    const day = ('0' + this.datum.getDate()).slice(-2);
    const month = ('0' + (this.datum.getMonth() + 1)).slice(-2);
    const year = this.datum.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  }
}
