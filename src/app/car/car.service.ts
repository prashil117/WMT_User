import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './carc';

@Injectable()
export class CarService {

  public url: string = "http://localhost:3000/carlist/";

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  getCarList()
  {
    return this._http.get<Car>(this.url);
  }

}
