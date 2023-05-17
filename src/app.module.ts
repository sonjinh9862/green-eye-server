import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhotoModule } from './photo/photo.module';
import { User } from './entity/User';
import { Photo } from './entity/Photo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sonjinh9862',
      password: 'Park9862@@',
      database: 'test1',
      synchronize: false,
      logging: false,
      entities: [User, Photo],
      migrations: [],
      subscribers: [],
    }),
    UsersModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
