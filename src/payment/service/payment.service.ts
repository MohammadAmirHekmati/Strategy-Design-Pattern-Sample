import { IPayment } from '../interface/payment-gateway.interface';
import { IPayInformation } from '../interface/pay-information.interface';
import { Injectable } from '@nestjs/common';
import { GatewaysEnum } from '../enums/gateways.enum';
import { ZarinpalGateway } from '../payments-gateways/zarinpal-gateway';
import { MellatGateway } from '../payments-gateways/mellat-gateway';


@Injectable()
export class PaymentService {

  public gateway:IPayment


  setGateway(gateway:string)
  {
    if (gateway==GatewaysEnum.ZARINPAL)
      this.gateway=new ZarinpalGateway()
    if (gateway==GatewaysEnum.MELLAT)
      this.gateway=new MellatGateway()
  }

  setPayInfo(payInfo:IPayInformation)
  {
    let paymentInformation= this.gateway.setPayInfo(payInfo)
    return paymentInformation
    console.log(this.gateway);
  }

  pay()
  {
    return this.gateway.pay()
  }
}