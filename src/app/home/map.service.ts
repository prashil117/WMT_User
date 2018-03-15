import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "./mapc";
@Injectable()
export class MapService {

  constructor(public _http: HttpClient) { }
  url:string="http://localhost:3000/maps/";
  
  getDistance(x,y){
    return this._http.get(this.url+x+"&"+y);
  }
}
