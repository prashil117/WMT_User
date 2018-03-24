import { Injectable } from '@angular/core';
import { Forgot } from './forgotc';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class ForgotService {

  url:string="http://localhost:3000/email/";
  content:string="Content-Type";
  header:string="application/json";
  
  constructor(public _http:HttpClient) { }
  sendMail(item:Forgot){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.header)});
  }

}
