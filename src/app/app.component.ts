import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HDFC-BANK';

  constructor(private service:CustomerService){}
 error:any
 getData(){
this.service.getError().subscribe(
  res=>{
    this.error=res
  },
  erro=>{
    this.error=erro.error
  }
)
 }
}
