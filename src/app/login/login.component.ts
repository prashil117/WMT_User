import { Component, OnInit,Input,EventEmitter,Output,ChangeDetectorRef } from '@angular/core';
import { User } from './userc';
import {UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './loginc';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_i:string;
  pass:string;


  email_id:string="";
  password:string="";
  user_name:string="";
  bod:string="";
  img:string="";
  mobile:string="";
  address:string="";
  gender:string="";
  user_photo:string="";
  public file_srcs:string[]=[];
  public debug_size_before:string[]=[];
  public debug_size_after:string[]=[];
  selectedFile:File=null;
  constructor(public _router:Router, public _data:UserService,public changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  onLogin(login) {
    
    this.email_i=login.value.email_i;
    this.pass=login.value.pass;
    console.log(this.email_i); 
    console.log(this.pass);
    let item = new User(this.email_i,this.pass,'', '', '', '', '','');
    this._data.login(item).subscribe(
      (data1:User[]) => {
        console.log(data1);
        if (data1.length==1) {
           localStorage.setItem('Email',this.email_i);
         this._router.navigate(['/home']);
        console.log("yess");
        }
        else {
          if (this.email_i.length==1) {
              if( this.pass.length!=1)
              {
            alert("password is wrong");
              }
        }else{
              alert("Incorrect Email and Password");   
        }
      }
    },
      function (e) {
        alert(e);
      }
    );
  }

  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
    
    console.log(value);
      }

  onAdd(addform){
    
        this.email_id=addform.value.email_id;
        this.password=addform.value.password;
        this.user_name=addform.value.user_name;
        this.address=addform.value.address;
        this.mobile=addform.value.mobile;
        this.bod=addform.value.bod;
     //   let item=new User(this.email_id,this.password,this.user_name,this.address,this.bod,this.gender,this.user_photo,this.mobile);
     const fd=new FormData();
     fd.append('user_email_id',this.email_id);
     fd.append('user_password',this.password);
     fd.append('user_name',this.user_name);
     fd.append('user_address',this.address);
     fd.append('user_DO_B',this.bod);
     fd.append('user_gender',this.gender);
     fd.append('image',this.selectedFile,this.selectedFile.name);
     fd.append('user_mobile_no',this.mobile);
        console.log(fd);
        //this._data.addUser(item).subscribe(
          this._data.addUser(fd).subscribe(
          (data:any)=>{
            console.log(data);
            //this._router.navigate(['/user']);
            console.log("Yess");
            
          }
        );
      }

}
