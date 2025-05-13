import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false }) // Переконайтесь, що nullable: false
  username: string;

  @Column({ type: 'varchar', nullable: false }) // Пароль також не має бути null
  password: string;

  @Column({ type: 'varchar', nullable: true }) // Якщо токен може бути null
  token: string;

  @CreateDateColumn()
  created_at: Date;
}
