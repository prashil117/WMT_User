import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { order } from '../order/orderc';
import { OrderService } from '../order/order.service';
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
  order:order[]=[];
  displayedColumns = ['source','destination', 'Booking_date','checking_date','checkout_date','amount','car_id','car_name'];
  dataSource: MatTableDataSource<order>;
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:OrderService) { }

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


  }

}
