import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../login/user.service';
import { User } from '../login/userc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email:string="";
  name:string="";
  img:string="";
  constructor(public _router:Router,public data:UserService) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
    this.data.getUserByEmail(this.email).subscribe(
      (data: User[]) => {
        this.name = data[0].user_name;
        this.img=data[0].user_photo;
      }
    );;
  }

}
