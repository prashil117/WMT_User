import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from './order.service';
import { Car } from '../car/carc';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public _subscription:Subscription;
  public id:number;
  public cname:string="";
  rate:number;
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:OrderService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
          
          
         
      }
  );
  this.cname=localStorage.getItem('name');
  let item = new Car(this.cname,'','','',null,'','',this.id);
  this._data.order(item).subscribe(
    (data:Car[])=>{
      console.log(this.id);
      console.log(this.cname);
      this.rate=data[0].car_rate;
      console.log(this.rate);
    }
  );
  }

}
