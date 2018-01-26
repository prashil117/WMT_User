import { Injectable } from '@angular/core';
import { Car } from '../car/carc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {
  public url: string = "http://localhost:3000/order/";
  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  order(item) {

    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

}
