import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {
  public _subscription:Subscription;
  id:string;

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
   
  }

}
