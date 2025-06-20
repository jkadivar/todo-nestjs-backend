import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

    @Column({default: ''})
  firstName: string;

      @Column({default: ''})
  lastName: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}