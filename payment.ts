import {IPayment} from '../strategy-design-pattern/interfaces/payment-interfaces'
import {IPaymentInformation} from "./interfaces/info-payment-interface";


export class Payment {
    public gateway:IPayment

    gateways(gateway:IPayment)
    {
        this.gateway==gateway
    }

    setInfo(info:IPaymentInformation)
    {
        this.gateway.setInfo(info)
    }

    pay():IPaymentInformation
    {
        return this.gateway.pay()
    }

}