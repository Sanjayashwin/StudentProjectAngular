import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(public catService: CategoryService, public router: Router) {
  }

  ngOnInit( ): void {
  }
  myCatagory = [];
  Status = "";
  msg = "";

  addSubCatagory(form: NgForm) {
    console.log(form.value);

    var fd = new FormData();

    fd.append("catname", form.value.catName);
    fd.append("Status", form.value.Status);

    console.log(fd);

    this.catService.addSubCatagory(form.value).subscribe((data: any) => {

      console.log(data);
      this.msg = data;
      
    }, (error: any) => {

      console.log(error);
    })


  }


}
