import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  myCatagory = [];
  Status = "";
  msg = "";

  login(form: NgForm) {
    console.log(form.value);

    var fd = new FormData();

    localStorage.setItem("token", form.value.role);

    this.loginService.setServiceData(form.value)
    this.loginService.updateCart.emit();

    if (form.value.role == 'Admin') {
      this.router.navigate(['/ADMIN']);
    } else {
      this.router.navigate(['/VENDOR']);
    }

  }


}
