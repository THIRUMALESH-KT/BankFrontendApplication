import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private basePath:string="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  saveCustomer(customer:Customer,address:Address):Observable<any>{
    customer.address = address;
      return this.http.post(`${this.basePath}create`,customer,{responseType:'text'});
  }
  customerLogin(accountNumber:number,custName:string):Observable<any>{
      return this.http.get(`${this.basePath}login/${accountNumber}/${custName}`)
  }
  updateCustomer(customer:Customer):Observable<any>{
    return this.http.put(`${this.basePath}update`,customer,{responseType:'text'})
  }
  findByMobile(mobileNumber:number):Observable<any>{
    return this.http.get(`${this.basePath}findByMobile/${mobileNumber}`)
  }

  getError():Observable<any>{
    return this.http.get(`${this.basePath}hello`,{responseType:'text'})
  }
}
