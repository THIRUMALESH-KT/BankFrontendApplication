import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Address } from '../address';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  message:any;
  customer!:Customer
  address!:Address
  constructor(private service:CustomerService){}
  
ngOnInit(){
this.customer=new Customer();
this.address=new Address();
}
saveCustomer(){
  this.customer.fname=this.customer.fname.toUpperCase();
  this.customer.lname=this.customer.lname.toUpperCase();
  this.service.saveCustomer(this.customer,this.address).subscribe(
    res=>{
      this.message=res;
    }
  )
}


}
