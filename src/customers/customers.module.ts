import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customers-account.middlewares copy';
import { ValidateCustomerMiddleware } from './middlewares/validate-customers.middlewares';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware)
      .exclude({
        path: 'customers/create',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
    // .forRoutes({
    //   path: 'customers/search/:id',
    //   method: RequestMethod.GET,
    // }, {
    //   path: 'customers/:id',
    //   method: RequestMethod.GET,
    // })
  }
}
