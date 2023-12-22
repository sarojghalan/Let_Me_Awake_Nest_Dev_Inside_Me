import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}
  // creating post operation in Cat controller
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    const { name, age, breed } = createCatDto;
    console.log(name, age, breed);
    return `This is a breed of ${createCatDto.breed}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // customizing HttpStatus response
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
      {
        cause: id,
      },
    );
  }
}
