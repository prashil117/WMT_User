import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import {  HotelService} from './hotel.service';
import { hotel } from './hotelc';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public destination:string="";
  hotels:hotel[]=[];
  hotel_name:string;
  
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:HotelService) { }

  ngOnInit() {


    this.destination=localStorage.getItem('Hcity');

    console.log(this.destination);


   

  }

  searchImages(hotel_name)
  {
    this._data.getHotelByCity(this.hotel_name.toLowerCase()).subscribe(
      (data:any)=>{
        this.hotels=data;
      }
    );
  }

}
