import {IPayment} from '../interfaces/payment-interfaces'
import {IPaymentInformation} from "../interfaces/info-payment-interface";

export class ZarinpalPayment implements IPayment{
    public info:IPaymentInformation

    setInfo(info: IPaymentInformation): any {
        this.info==info
    }

    pay(): IPaymentInformation {
        return this.info
    }

}