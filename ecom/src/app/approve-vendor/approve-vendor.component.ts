import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-vendor',
  templateUrl: './approve-vendor.component.html',
  styleUrls: ['./approve-vendor.component.css']
})
export class ApproveVendorComponent implements OnInit {
  optionsRadios="";
  constructor() { }

  ngOnInit(): void {
  }

  onItemChange(value){
  this. optionsRadios=value
 }
 getd(value)
 {
   console.log("hi",value)
 }
}
