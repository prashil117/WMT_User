import { map } from './../home/mapc';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ImageService {
  
private query:string;

private API_KEY:string=environment.PIXABAY_API_KEY;
private API_URL:string=environment.PIXABAY_API_URL;
private URL:string= this.API_URL+this.API_KEY+'&q=';
private perPage:string= "&per_page=100";
private min_width:string= "&min_width=600";
private min_height:string= "&min_height=800";
  constructor(private _http:HttpClient) { }

  getImage(query)
  {
    return this._http.get(this.URL+query+this.perPage+this.min_width+this.min_height); 
  }

}
