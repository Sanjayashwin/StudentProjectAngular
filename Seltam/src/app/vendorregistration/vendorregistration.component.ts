import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendorServiceService } from '../vendor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorregistration',
  templateUrl: './vendorregistration.component.html',
  styleUrls: ['./vendorregistration.component.css']
})
export class VendorregistrationComponent implements OnInit {
  myCategories: any[] = [];

  pdtCat = "";

  selectedMyImg: any;

  msg: any;
  constructor(public venService: VendorServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  selectedImage(event: any) {
    this.selectedMyImg = event.target.files[0];

    console.log(this.selectedMyImg);
  }


  addVendor(form: NgForm) {
    console.log(form.value);

    var fd = new FormData();
    console.log(form.value.FName);
    console.log(form.value.Fplace);
    console.log(form.value.Fpin);
    console.log(this.selectedMyImg);

    fd.append('fName', form.value.FName);
    fd.append('fPlac', form.value.Fplace);
    fd.append('fpin', form.value.Fpin);
    fd.append('vImg', this.selectedMyImg, 'VendorImg');

    console.log("testfd",fd)
    this.venService.addVendor(fd).subscribe((data: any) => {

      console.log(data);

      this.msg = data;
      this.router.navigate(['/']);
    }, (error: any) => {

      console.log(error);
    })

  }

}
