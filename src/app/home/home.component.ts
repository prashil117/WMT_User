import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapService } from './map.service';
import { MapsAPILoader } from "@agm/core";
import { } from "@types/googlemaps";
import { map } from './mapc';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('search', ) public searchElement: ElementRef;
  @ViewChild('search1', ) public searchElements: ElementRef;


 
  public map: map;
  distance: string = null;
  origin: string = null;
  destination: string = null;
  duration: string = null;
  distance1: string;
  distance2: string;
  city: string = '';
  x: string;
  y: string;
  x1:string="";
  y1:string="";
  d11:string="";
  d21:string="";
  d1: string = "";
  d2: string = "";
  days:any;
  a:string;
  b:string;
  constructor(public router:Router,private mapsApiLoader: MapsAPILoader, public data: MapService, private ngZone: NgZone, public _router: Router,public ngProgress: NgProgress) { }

  ngOnInit() {

    this.mapsApiLoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["address"] });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry == undefined || place.geometry == null) {
              return;
            }
          });
        });
      });

    this.mapsApiLoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElements.nativeElement, { types: ["address"] });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry == undefined || place.geometry == null) {
              return;
            }
          });
        });
      });
  }

  getkm(addform) {
    this.x=addform.value.x1;
    this.y=addform.value.y1;
    console.log(this.x);
    console.log(this.y);
    console.log(this.d1);
    console.log(this.d2);
    localStorage.setItem('Checkin', this.d1);
    localStorage.setItem('Checkout', this.d2);
    
    
    var a = moment(this.d1, 'DD/MM/YYYY');
    var b = moment(this.d2, 'DD/MM/YYYY');
    this.days = b.diff(a, 'days');
    


      localStorage.setItem('days',this.days);
      this.ngProgress.start();
     this.data.getDistance(this.x, this.y).subscribe(
       (data: map) => {
         this.map = data;
         this.distance = this.map.distance;

         this.origin = this.map.origin;
         this.destination = this.map.destination;
         this.duration = this.map.duration;
      //  this.distance.replace(/,\s?/g,"");  
      
        this.distance1 = this.distance.slice(0, this.distance.indexOf(' '));
        if(this.distance1.length>3)
        {
         this.a= this.distance.slice(0, this.distance.indexOf(','));
         this.b=this.distance1.slice(2,this.distance.indexOf(' '));

         this.distance2=this.a+this.b;
         
        }else
        {
          this.distance2 = this.distance.slice(0, this.distance.indexOf(' '));
        }
         localStorage.setItem('distance', this.distance2);
         console.log(this.distance2);
         localStorage.setItem('source', this.x);
         localStorage.setItem('destination', this.y);
         console.log(data);
         console.log(this.distance);
         this.ngProgress.done();
         this.router.navigate(['/car']);

       },
       function (err) {
        alert(err);
       },
      function () {

       }
     );
  }

  viewHotel() {
    console.log(this.city);
    localStorage.setItem('Hcity', this.city);
    this._router.navigate(['/Hotels']);
  }
}
