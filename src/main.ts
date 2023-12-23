import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatFuncMiddleWare } from './cats/cats.middleware';
import { RolesGuard } from './guard/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // in order to use global middleware
  app.use(CatFuncMiddleWare);

  // in order to user global guard

  // In the case of hybrid apps
  // useGlobalGuard method doesn't set up
  // guard guards for gateway and micro services
  // by default
  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();
