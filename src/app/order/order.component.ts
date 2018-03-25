import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from './order.service';
import { Car } from '../car/carc';
import { order } from './orderc';
import { UserService } from '../login/user.service';
import { User } from '../login/userc';
import { Email } from './emailc';
import { CarService } from '../car/car.service';
import { TravelerService } from '../traveler/traveler.service';
import { Traveler } from '../traveler/travelerc';
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
  email:string;
  destination:string;
  checkin:string;
  checkout:string;
  date:Date;
  currentDate:string;
  email_bill:string;
  temail:string;
  tid:string;
  uname:string;
  uno:string;
  public msg:string="";
  public msg1:string="";
  public t:string;
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:OrderService,public _data1:UserService,public datau:UserService,public datat:TravelerService) { }

  ngOnInit() {
    
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
          
          
         
      }
  
  );
  this.tid=localStorage.getItem('tid');
  this.cname=localStorage.getItem('name');
  this.email=localStorage.getItem('Email');
  this.datat.getTravellerById(this.tid).subscribe(
    (data5:Traveler[])=>{ 
      this.t=data5[0].traveller_name;
      this.temail=data5[0].traveller_email;
      console.log(this.t);
    }
  );

  this.datau.getUserByEmail(this.email).subscribe(
    (data:User[])=>{ 
      this.uname=data[0].user_name;
      this.uno=data[0].user_mobile_no;
      console.log(this.uname);
    }
  );

 
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
      this.checkin=localStorage.getItem('Checkin');
      this.checkout=localStorage.getItem('Checkout');
      this.date=new Date();
      this.currentDate=this.date.getDate().toString();
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
    let item=new order (this.email,this.source,this.destination,this.currentDate,this.checkin,this.checkout,null,null,this.id,"");
    this.msg="Destination: "+this.destination+"Current Date: "+this.currentDate+"Checkin :"+this.checkin+"Checkout :"+this.checkout+"Traveller :"+this.t+"Car :"+this.cname+"Km :"+this.km;
    this.msg1="Destination: "+this.destination+"Current Date: "+this.currentDate+"Checkin :"+this.checkin+"Checkout :"+this.checkout+"User :"+this.uname+"User Email :"+this.email+"User No :"+this.uno+"Car :"+this.cname+"Km :"+this.km;
    this._data.Onorder(item).subscribe(
      
     (data:any)=>{
       console.log(data);
       this._router.navigate(['/pay_success']);
     })

     let item1=new Email("Hello,"+this.msg,this.email,"Order"); 
     this._data.sendMail(item1).subscribe(
     (data:any)=>{
       console.log(data);
      console.log("Msg sent");
       this._router.navigate(['/pay_success']);
     })
     
     let item2=new Email("Hello,"+this.msg1,this.temail,"Order"); 
     this._data.sendMail(item2).subscribe(
     (data:any)=>{
       console.log(data);
      console.log("Msg sent");
       this._router.navigate(['/pay_success']);
     })
    }
  

  
  
}

