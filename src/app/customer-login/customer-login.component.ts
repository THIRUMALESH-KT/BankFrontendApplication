import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  accountNumber!:number;
  custName!:string;
  customer:any;
  customer2:any;
  amount!:number;
  oldPin!:number;
  newPin!:number;
  atmPin!:number;
  isAccount:boolean=false;
  isatmPin:boolean=false;
  login:boolean=false;

  displayData:string | null  =null;
  displayData2:string | null =null;
  errorMessage:string="";
  positiveMessage:string="";
  constructor(private service:CustomerService){}
  ngOnInite(){

    let number1=4;
    let number2=5;
    if(number1==number2){
      console.log("the two number are equal")
    }else{
      console.log("not equal");
    }
    console.log("console is working")
  }
  customerLogin(){
    this.errorMessage="";
    this.service.customerLogin(this.accountNumber,this.custName).subscribe(
      (res:any)=>{
        this.customer=res;
        this.isatmPin=true;
      },
      (error)=>{
        this.errorMessage=error.error;
      }
      
    )
  }
  pinCheck(){
       if(this.atmPin==this.customer.atmpin){
        this.login=true;
       }
       else{
        this.errorMessage="you entred pin is wrong"
       }
  }
  
  DepositAmount(){
    this.positiveMessage="";
    this.errorMessage="";
    if(this.amount>0){
    this.customer.balance=this.customer.balance+this.amount;
    this.service.updateCustomer(this.customer).subscribe(
      res=>{
        this.positiveMessage=res;
      },
      error=>{
        this.errorMessage=error.error;
      }
    )
  }else{
    this.errorMessage="mount must greater than 0"
  }
  }
  WithDrawAmount(){
    this.positiveMessage="";
    this.errorMessage="";
    if(this.amount>0){
      if(this.amount<this.customer.balance){
        this.customer.balance=this.customer.balance-this.amount;
        this.service.updateCustomer(this.customer).subscribe(
          res=>{
            this.positiveMessage=res;
          }
        )
      }else{
        this.errorMessage="insufficient Balance"
      }
    }else{
      this.errorMessage="invalid amount";
    }
  }
 
  changePin(){
    this.errorMessage="";
    this.positiveMessage="";
   if(this.customer.atmpin==null){
    this.customer.atmpin=this.newPin;
    this.service.updateCustomer(this.customer).subscribe(
      res=>{
        this.positiveMessage="Pin is changed";
      }
    )
   }else{
    if(this.customer.atmpin==this.oldPin){
      this.customer.atmpin=this.newPin;
      this.service.updateCustomer(this.customer).subscribe(
        res=>{
          this.positiveMessage="Pin is changed";
        }
      )
    }else{
      this.errorMessage="old pin is not matching ";
    }
   }

  }
  changeMobile(event:any){
  const mobileNumber=event.target.mobileNumber.value;
  if(mobileNumber.length==10){
    this.customer.custMobile=mobileNumber;
    this.service.updateCustomer(this.customer).subscribe(
      res=>{
        this.positiveMessage="you mobile number updated sucefully"
      }
    )
  }
  else{
    this.errorMessage="invalid mobile"
  }
      }

  transferMoney(event:any){
    const transferAmount=parseFloat(event.target.transferamount.value)
   if(transferAmount>0 && transferAmount<100000){
   if(transferAmount<=this.customer.balance){
           this.service.findByMobile(event.target.mobileNumber.value).subscribe(
            res=>{
              console.log("from 1st res")
             this.customer2=res;
             this.customer.balance=this.customer.balance-transferAmount;
             this.customer2.balance=this.customer2.balance+transferAmount;
              this.service.updateCustomer(this.customer2).subscribe(
                res=>{
                  console.log("credited customer updated (customer2)")
                  this.service.updateCustomer(this.customer).subscribe(
                    res=>{
                      console.log("debited customer also updated (customer")

                        this.positiveMessage="amount transfered sucefully";
                    },  (error: HttpErrorResponse) => {
                      // Error response handling
                      console.error('An error occurred:', error);
                      if (error.status === 400) {
                        console.log('Bad request error:', error.error);
                        // Handle the "account number or customer name is wrong" error here
                      } else {
                        // Handle other errors here
                      }
                    }
                  )
                }
              )
            },
            error=>{
              console.log("form error block")
              this.errorMessage=error.value;
            }
           )
   }else{
    this.errorMessage="insufficient balance"
   }

   }else{
  this.errorMessage="invalid amount \n amount must greater than 0 and less than 100000";
  }
  }
 
  
}
