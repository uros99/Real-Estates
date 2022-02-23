import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationOrder } from '../models/registration-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private uri = 'http://localhost:4000/';

  constructor(
    private http : HttpClient
  ) { }


  public register(body: any){
    return this.http.post(`${this.uri}order/order-registration`, body);
  }

  public getAllRegistrationOrders(){
    return this.http.get(`${this.uri}order/get-all-registration-orders`);
  }

  public approveRegistration(body: RegistrationOrder){
    return this.http.post(`${this.uri}order/approve`, body);
  }

  public rejectRegistration(body: RegistrationOrder){
    return this.http.post(`${this.uri}order/reject`, body);
  }
}
