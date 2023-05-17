import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, default: null })
  firstName: string;

  @Column({ nullable: true, default: null })
  lastName: string;

  @Column({ nullable: true, default: null })
  age: number;

  @Column({ nullable: true, default: null })
  test: boolean;

  @Column()
  user_id: string;

  @Column()
  user_password: string;
}
