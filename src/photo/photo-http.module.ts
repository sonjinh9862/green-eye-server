import { Module } from '@nestjs/common';
import { PhotoModule } from './photo.module';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

@Module({
  imports: [PhotoModule],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoHttpModule {}
