import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "./mapc";
@Injectable()
export class MapService {

  constructor(public _http: HttpClient) { }
  url:string="https://wishmytrip.herokuapp.com/maps/";
  
  getDistance(x,y){
    return this._http.get(this.url+x+"&"+y);
  }
}
