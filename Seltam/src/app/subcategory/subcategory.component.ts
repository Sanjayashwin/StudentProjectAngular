import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

declare var $ : any;
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  
  constructor(public catService: CategoryService, public router: Router) {
  }

  myCatagory = [];
  mySubCatagory = [];
  Status = "";
  msg = "";


  ngOnInit( ): void {

    this.catService.getCatagoryList().subscribe((data: any) => {

      console.log(data);
      this.myCatagory = data;
      
    }, (error: any) => {

      console.log(error);
    })



    this.getsubcatgory();


    

  }
 
  addSubCatagory(form: NgForm) {
    console.log(form.value);

    // var fd = new FormData();

    // fd.append("catname", form.value.catName);
    // fd.append("Status", form.value.Status);

    // console.log(fd);

    this.catService.addSubCatagory(form.value).subscribe((data: any) => {

      console.log(data);
      this.msg = data;
      this.getsubcatgory();
    }, (error: any) => {

      console.log(error);
    })


  }
getsubcatgory()
{

  this.catService.getSubCatagoryList().subscribe((data: any) => {

    console.log(data);
    this.mySubCatagory = data;
    
  }, (error: any) => {

    console.log(error);
  })
}





}
