import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './carc';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car:Car[]=[];
  public car_img:string="";
  constructor(public data1:CarService,public _router:Router,public ngProgress: NgProgress) { }

  ngOnInit() {
    this.ngProgress.start();
    this.data1.getCarList().subscribe(
      (data:any)=>{
        this.car=data;
        this.ngProgress.done();
      }
    );
  }

  travellerList(item){
    this._router.navigate(['/traveler',item.car_name]);
  }

}
