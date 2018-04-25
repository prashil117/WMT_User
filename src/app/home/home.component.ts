import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapService } from './map.service';
import { MapsAPILoader } from "@agm/core";
import { } from "@types/googlemaps";
import { map } from './mapc';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
  city: string = '';
  x: string;
  y: string;
  d1: string = "";
  d2: string = "";
  constructor(private mapsApiLoader: MapsAPILoader, public data: MapService, private ngZone: NgZone, public _router: Router) { }

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

  getkm() {

    console.log(this.d1);
    console.log(this.d2);
    localStorage.setItem('Checkin', this.d1);
    localStorage.setItem('Checkout', this.d2);
    
    
    var a = moment(this.d1, 'DD/MM/YYYY');
    var b = moment(this.d2, 'DD/MM/YYYY');
    var days = b.diff(a, 'days');
      console.log(days);
    this.data.getDistance(this.x, this.y).subscribe(
      (data: map) => {
        this.map = data;
        this.distance = this.map.distance;

        this.origin = this.map.origin;
        this.destination = this.map.destination;
        this.duration = this.map.duration;
        this.distance1 = this.distance.slice(0, this.distance.indexOf(' '));
        localStorage.setItem('distance', this.distance1);
        console.log(this.distance1);
        localStorage.setItem('source', this.x);
        localStorage.setItem('destination', this.y);
        console.log(data);
        console.log(this.distance);

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
