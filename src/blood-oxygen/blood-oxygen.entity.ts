import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BloodOxygen {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  value!: number;
}