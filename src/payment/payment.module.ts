import { Module } from '@nestjs/common';
import { PaymentService } from './service/payment.service';
import { PaymentController } from './controller/payment.controller';

@Module({
  controllers:[PaymentController],
  providers:[PaymentService]
})
export class PaymentModule {}
