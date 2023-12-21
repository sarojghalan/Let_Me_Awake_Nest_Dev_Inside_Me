import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service';

// if want to export module everywhere
// @Global()
@Module({
  controllers: [CatsController],
  providers: [CatService],
  // To share an instance of CatsService
  // we need to export it
  exports: [CatService],
})
export class CatsModule {
  // dependency injection
  constructor(private catsService: CatService) {}
}
