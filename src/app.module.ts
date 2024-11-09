import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats/nats.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [NatsModule, ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
