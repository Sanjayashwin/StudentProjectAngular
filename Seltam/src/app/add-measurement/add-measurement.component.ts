import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { VendorServiceService } from '../vendor-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-measurement',
  templateUrl: './add-measurement.component.html',
  styleUrls: ['./add-measurement.component.css']
})
export class AddMeasurementComponent implements OnInit {
  Vid: number;
  designId: number;
  mySubscribe: Subscription;

  catName: String;
  SubCatName: String;
  constructor(public activateroute: ActivatedRoute, public venService: VendorServiceService) {
  }

  ngOnInit(): void {
    console.log("ngOnInit invoked");

    // console.log(this.activateroute.params._value.catId);

    // this.myCatId = this.activateroute.params._value.catId;

    this.mySubscribe = this.activateroute.params.subscribe((param: Params) => {

      console.log("parameter changed");

      this.Vid = param.Vid;
      this.designId = param.Designid;

      console.log(this.Vid)
      console.log(this.designId)


      this.venService.getDesignTemplateById(this.designId).subscribe((data: any) => {

        console.log(data);

        this.catName = data[0].catname;
        this.SubCatName = data[0].Subcatname;


      }, (error: any) => {

        console.log(error);
      })



    })


  }



  addMesurement(form: NgForm) {

    form.value.catName = this.catName
    form.value.SubcatatName = this.SubCatName

    console.log(form.value)
    console.log(form.value.MeasurementStatus)
  }

}
