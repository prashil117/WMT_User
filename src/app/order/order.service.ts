import { Injectable } from '@angular/core';
import { Car } from '../car/carc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  order} from './orderc';

@Injectable()
export class OrderService {
  public url: string = "http://localhost:3000/order/";
  public url1: string = "http://localhost:3000/orderbill/";
  constructor(public _http: HttpClient) { }

  content: string = "Content-Type";
  header: string = "application/json";

  order(item) {

    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

  Onorder(item) {
    
        let body = JSON.stringify(item);
        return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
      }
}
