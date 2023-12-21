import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
  NestModule,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CatsMiddleWare } from './cats/cats.middleware';
import helmet from 'helmet';
@Module({
  imports: [CatsModule],
})

// implementing cat middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // implementing multiple middleware
      .apply(helmet(), CatsMiddleWare)
      // element inside exclude wont have middleware functionality
      .exclude({
        path: 'cats',
        method: RequestMethod.GET,
      })
      // importing RequestMethod enum to reference
      // the desired request method type
      // cats* means route wildcard
      .forRoutes({ path: 'cats*', method: RequestMethod.POST });
  }
}
