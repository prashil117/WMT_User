import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './carc';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car:Car[]=[];
  constructor(public data1:CarService) { }

  ngOnInit() {
    this.data1.getCarList().subscribe(
      (data:any)=>{
        this.car=data;
      
      }
    );
  }

}
