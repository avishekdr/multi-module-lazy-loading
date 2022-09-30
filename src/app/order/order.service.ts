import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderModule } from './order.module';
import { Order } from './pages/model/order.model';

@Injectable({
  providedIn: OrderModule
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private readonly PHX_URL = environment.STV;

  add(data: Order) {
    return this.http.post<{message:string}>(this.PHX_URL, data);
  }

  get() {
    return this.http.get<{message:string}>(this.PHX_URL);
  }
}
