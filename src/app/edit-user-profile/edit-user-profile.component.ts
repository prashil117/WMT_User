import { User } from '../login/userc';
import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {UserService } from '../login/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Forget } from './forgetc';
import { OrderService } from '../order/order.service';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  email:string="";
  msg:string="";
emailId:string='';
  constructor(public _router:Router, public data:UserService,public _email:OrderService,public ngProgress: NgProgress) { }

  ngOnInit() {
  }

  onSend()
  {
    this.ngProgress.start();
    if(this.email=="")
    {
      alert("please enter email address");
      this.ngProgress.done();
    }
    else
    {
      
      this.data.getUserByEmail(this.email).subscribe(
        (data:User[])=>{
          if(data.length==1){
            var msg=data[0].user_name+" your password is "+data[0].user_password;
            console.log(msg);
            this._email.sendMail(new Forget(msg,this.email,"Reseting Email Password")).subscribe(
              (data:any)=>
              {
                  
                console.log("msg sent");
              });
            alert("Email has been sent to your "+ this.email);
            this.ngProgress.done();
          }
          else{
            alert("please enter correct email address");
            this.ngProgress.done();
          }
        }
      );
      
    }
  }

}
