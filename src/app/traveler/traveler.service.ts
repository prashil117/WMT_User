import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Traveler } from './travelerc';

@Injectable()
export class TravelerService {
  public url: string = "http://localhost:3000/travellerlist/";
  public url1: string = "http://localhost:3000/travellers/";
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";

  getTravellerByName(name)
  {
    return this._http.get<Traveler[]>(this.url+name);
  }

  getTravellerById(id)
  {
    return this._http.get<Traveler[]>(this.url1+id);
  }

}
