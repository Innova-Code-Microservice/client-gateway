import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats/nats.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [NatsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
