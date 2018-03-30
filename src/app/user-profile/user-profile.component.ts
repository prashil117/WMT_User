import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { User } from '../login/userc';
import { UserService } from "../login/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  selectedFile: File = null;
  public _subscription:Subscription;
  email:string="";
  name1:string="";
  gender:string="";
  mobile1:string="";
  address1:string="";
  bod1:string="";
  img:string="";
  email1:string="";

  pass:string="";
  pass1:string="";
  pass2:string="";
  password:string;
  

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:UserService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
       //   this.email=para["email_id"];
        this.email=localStorage.getItem('Email');
          this.email1=this.email;
          console.log(this.email1);
         
      }
  );

  this._data.getUserByEmail(this.email).subscribe(
    (data:User[])=>{
      this.name1=data[0].user_name;
      this.gender=data[0].user_gender;
      this.address1=data[0].user_address;
      this.mobile1=data[0].user_mobile_no;
      this.bod1=data[0].user_DO_B;
      this.img=data[0].user_photo;
      this.password = data[0].user_password;
      console.log(data);
    }
  );

  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];

    console.log(value);
  }

  getPicture() {
    this.fileInput.nativeElement.click();
  }

  onUpdate(){
  /*  let user=new User(this.email,'',this.name1,this.address1,this.bod1,this.gender,this.img,this.mobile1);
    this._data.editUser(this.email,user).subscribe(
      (data:User[])=>{
        this._router.navigate(['/user']);
        console.log(data);
        console.log("Yes")
        alert("Changes Saved");
      }
    );*/
    if (this.selectedFile == null) {
      let user=new User(this.email,'',this.name1,this.address1,this.bod1,this.gender,this.img,this.mobile1);
      this._data.editUser(this.email, user).subscribe(
        () => {
          this._router.navigate(['/user']);
        }
      );
    }
    else {
      const fd=new FormData();
      fd.append('user_email_id',this.email);
      fd.append('user_name',this.name1);
      fd.append('user_address',this.address1);
      fd.append('user_DO_B',this.bod1);
      fd.append('user_gender',this.gender);
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('user_mobile_no',this.mobile1);
         console.log(fd);
  
      console.log(fd);
  
      this._data.editUserimg(fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/user']);
        }
      );
    }
  }

  Changepassword(){
    if(this.pass1==this.password)
    {
      if(this.pass==this.pass2)
      {
    let user=new User(this.email,this.pass,'','','','','','');
    this._data.Resetpassword(this.email,user).subscribe(
      ()=>{
        //this._router.navigate(['/Edittraveller']);
        console.log("Yess");
        alert("Password Changed");
      }
    );
  }
}
  else
  {
    alert("Please enter valid password");
  }
}

}
