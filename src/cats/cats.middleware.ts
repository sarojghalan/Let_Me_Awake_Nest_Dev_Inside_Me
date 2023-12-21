import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Functional Middleware
export function CatFuncMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const {} = req;
  const {} = res;
  console.log('...Request');
  next();
}

// giving this middleware power of nest framework
@Injectable()
// In class Method
export class CatsMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // destructuring request and response
    const {} = req;
    const {} = res;
    console.log('...Request');
    // passing control to next middleware function
    next();
  }
}
