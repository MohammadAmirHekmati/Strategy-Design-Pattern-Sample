import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from '../service/payment.service';
import { IPayInformation } from '../interface/pay-information.interface';


@Controller('payment')
export class PaymentController {
  constructor(private paymentService:PaymentService) {
  }

  @Post('set/gateway/:gateway')
  setGateway(@Param('gateway') gateway:string)
  {
    return this.paymentService.setGateway(gateway)
  }

  @Post('set/info')
  setPayInfo(@Body() payInfo:IPayInformation)
  {
    return this.paymentService.setPayInfo(payInfo)
  }

  @Get('pay/result')
  getPayResult()
  {
    return this.paymentService.pay()
  }

}