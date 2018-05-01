import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from '../order/order.service';
import { Car } from '../car/carc';
import { order } from '../order/orderc';
import { UserService } from '../login/user.service';
import { User } from '../login/userc';
import { Email } from '../order/emailc';
import { CarService } from '../car/car.service';
import { TravelerService } from '../traveler/traveler.service';
import { Traveler } from '../traveler/travelerc';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.css']
})
export class PaySuccessComponent implements OnInit {

  public email:string;
  public uname:string;

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:OrderService,public _data1:UserService,public datau:UserService,public datat:TravelerService,public ngProgress: NgProgress) { }

  ngOnInit() {
    this.ngProgress.start();
    this.email=localStorage.getItem('Email');
    this.datau.getUserByEmail(this.email).subscribe(
      (data:User[])=>{ 
        this.uname=data[0].user_name;
        this.ngProgress.done();
      }
    );
  }
 

}
