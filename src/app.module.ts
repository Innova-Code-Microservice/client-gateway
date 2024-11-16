import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats/nats.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NatsModule, ProductsModule, OrdersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
