import { HttpException, HttpStatus } from '@nestjs/common';

export class CatException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
