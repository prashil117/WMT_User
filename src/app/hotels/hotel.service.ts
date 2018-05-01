import { Injectable } from '@angular/core';
import { hotel } from './hotelc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HotelService {
  public url="https://wishmytrip.herokuapp.com/hotelcity/";

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";



  getHotelByCity(id)
  {
    return this._http.get<hotel>(this.url+id);
  }

}
