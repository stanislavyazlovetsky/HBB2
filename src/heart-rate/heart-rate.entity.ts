import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class HeartRate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  value!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
