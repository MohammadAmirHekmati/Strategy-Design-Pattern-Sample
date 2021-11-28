import {IPaymentInformation} from "./info-payment-interface";

export interface IPayment {

    setInfo(info:IPaymentInformation):any

    pay():IPaymentInformation
}