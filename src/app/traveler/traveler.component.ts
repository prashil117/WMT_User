import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravelerService } from './traveler.service';
import { Traveler } from './travelerc';
import { Car } from '../car/carc';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  public _subscription:Subscription;
  name:string="";
  tname:string="";
  rate:number;
  img:string="";
  traveler:Traveler[]=[];
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravelerService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.name=para["car_name"];
          localStorage.setItem('name',this.name);
      }
  );

  this._data.getTravellerByName(this.name).subscribe(
    (data:Traveler[])=>{
      this.tname=data[0].traveller_name;
      this.traveler=data;
   /*   this.rate=data[0].car_rate;
      this.img=data[0].traveller_photo;*/
    }
  );
  }

  select(item)
  {
   // alert(this.name);
   // alert(item.traveller_id);
   //console.log("hbcdj"+item.traveller_id);
   localStorage.setItem('tid',item.traveller_id);
   this._router.navigate(['/order',item.fk_traveller_id]);
  }

  Onchange()
  {
    localStorage.clear();
    this._router.navigate(['/home']);
  }
}
