import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
// for now it allows all request to proceed
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    return true;
  }
}
