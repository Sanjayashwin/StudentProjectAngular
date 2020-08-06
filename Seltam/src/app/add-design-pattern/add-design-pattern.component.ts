import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-add-design-pattern',
  templateUrl: './add-design-pattern.component.html',
  styleUrls: ['./add-design-pattern.component.css']
})
export class AddDesignPatternComponent implements OnInit {

  constructor(public catService: CategoryService, public router: Router,public venService: VendorServiceService) {
  }
  multipleImages = [];
  myCatagory = [];
  mySubCatagory = [];
  Status = "";
  msg = "";
  selectedMyImg: any;
  venodorId;
  ngOnInit(): void {
    this.catService.getCatagoryList().subscribe((data: any) => {

      console.log(data);
      this.myCatagory = data;

    }, (error: any) => {

      console.log(error);
    })

    this.venodorId=localStorage.getItem("vid");

  }


  getsubcatById(deviceValue) {

    this.catService.getSubcatagoryById(deviceValue).subscribe((data: any) => {

      console.log(data);
      this.mySubCatagory = data;

    }, (error: any) => {

      console.log(error);
    })

  }

  selectedImage(event: any) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
      console.log(this.multipleImages)
    }
  }



  addDesignTemp(form: NgForm) {
    console.log("chck add vendor",form.value);
    console.log(this.venodorId)
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img);
    }
    formData.append('vendorId', this.venodorId);
    formData.append('catName', form.value.catName);
    formData.append('SubCatname', form.value.SubcatName);
    formData.append('DesignPatname', form.value.DesignPatName);
    
    formData.append('cost', form.value.DesignCost);
    formData.append('Ddate', form.value.DeliveryDate);
    formData.append('Status', form.value.DesignStatus);
 

     //console.log("testfd",formData)
     this.venService.addDesignTemplate(formData).subscribe((data: any) => {

     console.log(data);

       this.msg = data;
       this.router.navigate(['/chooseMesurement/'+data.vendorId+'/'+data.Designid]);
     }, (error: any) => {

       console.log(error);
     })


  }
}
