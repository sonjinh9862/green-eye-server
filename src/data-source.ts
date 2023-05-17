import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Photo } from './entity/Photo';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'sonjinh9862',
  password: 'Park9862@@',
  database: 'test1',
  synchronize: false,
  logging: false,
  entities: [User, Photo],
  migrations: [__dirname + '/migrations/**/*.js'],
});
