import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatService } from './cats.service';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/guard/roles.decorator';

@Controller('cats')
// binding guard
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catService: CatService) {}
  // creating post operation in Cat controller
  @Post()
  // binding roles
  @Roles(['admin'])
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
