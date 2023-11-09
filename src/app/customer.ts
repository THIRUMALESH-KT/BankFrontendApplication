import { Address } from "./address";

export class Customer {
    accountNumber!:number;
    bankName!:string;
    iFSCcode!:string;
    balance!:number;
    atmpin:any;
    fname!:string;
    lname!:string;
    custName=this.fname+" "+this.lname
    custMobile!:number;
    address!:Address;
}
