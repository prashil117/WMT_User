import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './userc';

@Injectable()
export class UserService {

  public url: string = "http://localhost:3000/users/";
  public url1:string="http://localhost:3000/login/";
  public url2: string = "http://localhost:3000/uemail/";
  public url3:string="http://localhost:3000/userpassword/"
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  addUser(item:FormData) {
    
      //  let body = JSON.stringify(item);
        return this._http.post(this.url,item);
      }

      login(item)
      {
        let body=JSON.stringify(item);
      
        return this._http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
      }

      getUserByEmail(id)
      {
        return this._http.get(this.url2+id);
      }

      editUser(id,item){
        let body = JSON.stringify(item);
        return this._http.put(this.url+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
     
      }

      Resetpassword(id,item)
      {
        let body = JSON.stringify(item);
        return this._http.put(this.url3+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
      }

}
