import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-approve-vendor',
  templateUrl: './approve-vendor.component.html',
  styleUrls: ['./approve-vendor.component.css']
})
export class ApproveVendorComponent implements OnInit {
  optionsRadios = "";
  constructor(public venService: VendorServiceService, public loginService: LoginService, public router: Router) { }
  VendorPendingLIst = [];
  VendorApprovedLIst = [];
  vname = "";
  vplace = "";
  vpin = "";
  Approvevid = "";
  Rejectid = "";

  ngOnInit(): void {
    this.getPendingVendorList();
    this.geApprovedVendorList()
    this.loginService.updateCart.emit();
  }

  onItemChange(value) {
    this.optionsRadios = value
  }
  PendingListByID(value) {

    this.venService.getpendingVendorListById(value).subscribe((data: any[]) => {

      console.log("my data", data);

      this.vname = data[0].FirstName;
      this.vplace = data[0].FirstName;
      this.vpin = data[0].Pincode;
      this.loginService.updateCart.emit();
    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");

    });



  }




  setvendorID(value) {
    this.Approvevid = value;
    this.Rejectid = value;
    console.log(this.Approvevid)
  }

  ApproveVendor(ngform: NgForm) {

    ngform.value.Approvevid = this.Approvevid;
    ngform.value.status = "Approved"


    this.venService.ApproveVendorById(ngform.value).subscribe((data: any[]) => {

      console.log("my data", data);
      $("#modalUpdateApprove").modal("hide");

      this.sendLoginDetails(ngform);

      this.getPendingVendorList();
      this.geApprovedVendorList();

    }, (error) => {

      console.log("my error", error);

    }, () => {

      // console.log("completed");


    });
    //console.log(ngform.value)
    this.getPendingVendorList();
    this.geApprovedVendorList();
  }

  RejectVendor(ngformR: NgForm) {
    ngformR.value.Rejectid = this.Rejectid;
    ngformR.value.status = "Rejected"

    console.log("my data", ngformR.value);
    this.venService.RejectVendorById(ngformR.value).subscribe((data: any[]) => {

      // console.log("my data", data);
      $("#modalUpdateReject").modal("hide");
      // this.router.navigate(['/vendoreAppprove']);
      this.getPendingVendorList();
      this.geApprovedVendorList();


    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");


    });
    // console.log(ngformR.value)
    this.getPendingVendorList();
    this.geApprovedVendorList();

  }



  getPendingVendorList() {
    this.venService.getPendingVendorList().subscribe((data: any[]) => {

      //console.log("my data", data);

      this.VendorPendingLIst = data;

    }, (error) => {

      console.log("my error", error);

    }, () => {

      //console.log("completed");

    });
  }




  geApprovedVendorList() {
    this.venService.getApprovedVendorList().subscribe((data: any[]) => {

      //console.log("my data", data);

      this.VendorApprovedLIst = data;

    }, (error) => {

      console.log("my error", error);

    }, () => {

      //console.log("completed");

    });
  }



  sendLoginDetails(ngform: NgForm) {
    let val: any;
    console.log("sendlogin", ngform.value.Approvevid)
    this.venService.getpendingVendorListById(ngform.value.Approvevid).subscribe((data: any[]) => {

      console.log("my login", data[0])
     this. insertlogindetails(data[0]);

    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");

    });


  }


  insertlogindetails(obj)
  
  {
    this.venService.SendLoginDetails(obj).subscribe((data: any[]) => {

    

    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");

    });



  }


}
