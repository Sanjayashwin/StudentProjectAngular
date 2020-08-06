import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public venService: VendorServiceService, public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  myCatagory = [];
  Status = "";
  msg = "";

  login(form: NgForm) {
    console.log(form.value);


    this.loginService.dologin(form.value).subscribe((data: any) => {

      this.loginService.updateCart.emit();

      localStorage.setItem("token", data[0].role);
      localStorage.setItem("vid", data[0].VendorID);

      console.log("login data",data[0].role);
      
     // this.msg = data;
      if( data[0].role='Admin')
      {
      this.router.navigate(['ADMIN']);
      }else
      {
        this.router.navigate(['VENDOR']);
      }
    }, (error: any) => {

      console.log(error);
    })

  }








}



