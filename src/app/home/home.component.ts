import { Component, OnInit, ViewChild, ElementRef,NgZone } from '@angular/core';
import { MapService } from './map.service';
import { MapsAPILoader } from "@agm/core";
import {  } from "@types/googlemaps";
import { map } from './mapc';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild('search',) public searchElement:ElementRef;
  @ViewChild('search1',) public searchElements:ElementRef;
  
  
  
    public map:map;
    distance:string=null;
    origin:string=null;
    destination:string=null;
    duration:string=null;
    distance1:string[]=[];
    x:string;
    y:string;
  constructor(private mapsApiLoader:MapsAPILoader,public data:MapService,private ngZone:NgZone) { }

  ngOnInit() {
    this.mapsApiLoader.load().then(
      ()=>{
      let autocomplete=new google.maps.places.Autocomplete(this.searchElement.nativeElement,{types:["address"]});
        
      autocomplete.addListener("place_changed",()=>{
            this.ngZone.run(()=>{
              let place: google.maps.places.PlaceResult=autocomplete.getPlace();
              if(place.geometry==undefined || place.geometry==null)
              {
                return;
              }
          });
        });
      });
    
      this.mapsApiLoader.load().then(
        ()=>{
        let autocomplete=new google.maps.places.Autocomplete(this.searchElements.nativeElement,{types:["address"]});
          
        autocomplete.addListener("place_changed",()=>{
              this.ngZone.run(()=>{
                let place: google.maps.places.PlaceResult=autocomplete.getPlace();
                if(place.geometry==undefined || place.geometry==null)
                {
                  return;
                }
            });
          });
        });
  }

  getkm()
  {


        
    this.data.getDistance(this.x,this.y).subscribe(
      (data:map)=>{
        this.map=data;
        this.distance=this.map.distance;
        
        this.origin=this.map.origin;
        this.destination=this.map.destination;
        this.duration=this.map.duration;
        this.distance1=this.distance.split(" ");
        console.log(data);
        console.log(this.distance);
        
      },
      function(err){
        alert(err);
      },
      function(){

      }
    );
  }
}
