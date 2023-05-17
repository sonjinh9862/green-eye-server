import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getFindAll(): any {
    return this.photoService.findAll();
  }
}
