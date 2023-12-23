import { Reflector } from '@nestjs/core';

// creating custom roles decorator
export const Roles = Reflector.createDecorator<string[]>();
