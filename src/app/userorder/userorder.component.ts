import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { order } from '../order/orderc';
import { OrderService } from '../order/order.service';
import { User } from '../login/userc';
import { UserService } from "../login/user.service";
import { NgProgress } from 'ngx-progressbar';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {
  @ViewChild(MatPaginator)paginator:MatPaginator;
  public _subscription:Subscription;
  email:string;
  email1:string;
  name1:string="";

  img:string="";
  order:order[]=[];
  displayedColumns = ['source','destination', 'Booking_date','checking_date','checkout_date','amount','car_id','car_name'];
  dataSource: MatTableDataSource<order>;
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:OrderService,public data:UserService,public ngProgress: NgProgress) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
       //   this.email=para["email_id"];
        this.email=localStorage.getItem('Email');
          this.email1=this.email;
          console.log(this.email1);
         
      }
  );

  this._data.getOrderById(this.email).subscribe(
    (data:any)=>{
      this.order=data;
      this.dataSource = new MatTableDataSource(this.order);
      this.dataSource.paginator=this.paginator
      console.log(this.order);
    }
  );

  this.data.getUserByEmail(this.email).subscribe(
    (data:User[])=>{
      this.name1=data[0].user_name;
      this.img=data[0].user_photo;
      console.log(data);
    }
  );


  }

}
