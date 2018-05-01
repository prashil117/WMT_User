import { Injectable } from '@angular/core';
import { Car } from '../car/carc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  order} from './orderc';

@Injectable()
export class OrderService {
  public url: string = "https://wishmytrip.herokuapp.com/order/";
  public url1: string = "https://wishmytrip.herokuapp.com/orderbill/";
  public url2: string = "http://localhost:3000/email/";
  public url3:string="https://wishmytrip.herokuapp.com/userorder/";
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

      sendMail(item){
        let body = JSON.stringify(item);
        return this._http.post(this.url2, body, { headers: new HttpHeaders().set(this.content, this.header) });
      }

      getOrderById(id)
      {
        return this._http.get<order>(this.url3+id);
      }


}

