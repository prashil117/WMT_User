import { Component, OnInit } from '@angular/core';
import { User } from '../login/userc';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Forgot } from './forgotc';
import { UserService } from '../login/user.service';
import { ForgotService } from "./forgot.service";
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string="";
  msg:string="";
  constructor(public _router:Router,public _data:UserService,public _email:ForgotService,public ngProgress: NgProgress) { }

  ngOnInit() {
  }

  onForgot(forgot)
  {
    this.ngProgress.start();
    this.email=forgot.value.email;
    console.log(this.email);

    if(this.email=="")
    {
      alert("pleas enter email address");
      this.ngProgress.done();
    }
    else{
      this._data.getUserByEmail(this.email).subscribe(
        (data:User[])=>{
          if(data.length==1){
            var msg=data[0].user_name+"Your password is " +data[0].user_password;
            console.log(msg);
            this._email.sendMail(new Forgot(msg,this.email,"Reseting Email Password")).subscribe(
              (data:any)=>{
                console.log("msg sent");
              });
              alert("Email has been sent to your "+this.email);
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
