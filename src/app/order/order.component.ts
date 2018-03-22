import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from './order.service';
import { Car } from '../car/carc';
import { order } from './orderc';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public _subscription:Subscription;
  public id:number;
  public cname:string="";
  public ans:number=0;
  public rate:number;
  public gst:number;
  public cgst:number;
  public sgst:number;
  public km:number;
  public driverallow:number=200;
  public final:number;
  public finalrate:number;
  public distance:string;
  source:string;
  destination:string;
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
      this.distance=localStorage.getItem('distance');
      this.source=localStorage.getItem('source');
      this.destination=localStorage.getItem('destination');
      console.log(this.distance);
      this.km=+this.distance;
      console.log(this.km);
      if (this.km>300) {
        this.ans=this.km*this.rate;
        this.final=this.ans+this.driverallow;
        this.gst=(this.final*5)/100;
        this.finalrate=this.final+this.gst;


        
      } 
      
      
      else {
        
        this.ans=this.rate*300;
        this.final=this.ans+this.driverallow;
        this.gst=(this.final*5)/100;
        this.finalrate=this.final+this.gst;
        
      }
     
      
      
    }
  );

  
  }
  onAdd()
  {
    let item=new order ("",this.source,this.destination,"","","",null,null,this.id,"");
    this._data.Onorder(item).subscribe(

     (data:any)=>{
       console.log(data);
       this._router.navigate(['/pay_success']);
     }

    )

  }

  
  

}
