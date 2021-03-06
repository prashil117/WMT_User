import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './carc';

@Injectable()
export class CarService {

  public url: string = "https://wishmytrip.herokuapp.com/carlist/";
  public url1: string = "https://wishmytrip.herokuapp.com/cars/";
  public url2:string="https://wishmytrip.herokuapp.com/carstatus/";
  

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  getCarList()
  {
    return this._http.get<Car>(this.url);
  }

  getCarById(id)
  {
    return this._http.get<Car>(this.url1+id);
  }
  editCar(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }
  changecar(id)
  {
    
    return this._http.put(this.url2 + id,  { headers: new HttpHeaders().set(this.content, this.header) });

  }
  

  
}
