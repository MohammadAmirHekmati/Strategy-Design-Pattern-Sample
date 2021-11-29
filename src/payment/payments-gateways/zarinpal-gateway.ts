import { IPayment } from '../interface/payment-gateway.interface';
import { IPayInformation } from '../interface/pay-information.interface';

export class ZarinpalGateway implements IPayment{
  public payInfo:IPayInformation

  setPayInfo(payInfo: IPayInformation) {
    this.payInfo=payInfo
  }

  pay() {
    return this.payInfo
  }

}