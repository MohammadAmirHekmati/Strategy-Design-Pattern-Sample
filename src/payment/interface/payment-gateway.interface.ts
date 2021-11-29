import { IPayInformation } from './pay-information.interface';

export interface IPayment {

  setPayInfo(payInfo:IPayInformation)

  pay()
}