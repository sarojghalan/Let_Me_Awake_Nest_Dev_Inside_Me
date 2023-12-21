import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatService {
  private readonly cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // database logic here
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // database logic here
    return this.cats;
  }
}
