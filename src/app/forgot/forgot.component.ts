import { Component, OnInit } from '@angular/core';
import { User } from '../login/userc';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Forgot } from './forgotc';
import { UserService } from '../login/user.service';
import { ForgotService } from "./forgot.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string="";
  msg:string="";
  constructor(public _router:Router,public _data:UserService,public _email:ForgotService) { }

  ngOnInit() {
  }

  onForgot(forgot)
  {
    this.email=forgot.value.email;
    console.log(this.email);

    if(this.email=="")
    {
      alert("pleas enter email address");
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
          }
          else{
            alert("please enter correct email address");
          }
        }
      );
    }
  }
}
