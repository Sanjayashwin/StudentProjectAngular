import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reject-list',
  templateUrl: './reject-list.component.html',
  styleUrls: ['./reject-list.component.css']
})
export class RejectListComponent implements OnInit {

  constructor(public venService: VendorServiceService, public loginService: LoginService, public router: Router) { }
  VendorRejectedLIst = []
  ngOnInit(): void {

    this.getRejectedVendorList();
  }


  RejectetdListByID(value) {
    this.venService.getpendingVendorListById(value).subscribe((data: any[]) => {

      console.log("my data", data);
      // this.vname = data[0].FirstName;
      // this.vplace = data[0].FirstName;
      // this.vpin = data[0].Pincode;
      this.loginService.updateCart.emit();
    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");

    });


  }


  getRejectedVendorList() {
    this.venService.getRejectedVendorList().subscribe((data: any[]) => {

      //console.log("my data", data);

      this.VendorRejectedLIst = data;

    }, (error) => {

      console.log("my error", error);

    }, () => {

      //console.log("completed");

    });
  }
}
