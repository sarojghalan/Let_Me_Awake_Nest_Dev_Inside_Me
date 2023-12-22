import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  HttpException,
  HttpStatus,
  ParseIntPipe,
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
  // binding instance of ParseIntPipe to
  // ensure our parameter is a number
  remove(@Param('id', ParseIntPipe) id: string) {
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
