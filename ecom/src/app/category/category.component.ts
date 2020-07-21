import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public catService: CategoryService, public router: Router) {


  }
  myCatagory = [];
  Status = "";
  msg = "";

  ngOnInit(): void {

    this.showCatagoryLIst();

  }




  showCatagoryLIst() {
    this.catService.getCatagoryList().subscribe((data: any[]) => {

      console.log("my data", data);

      this.myCatagory = data;

    }, (error) => {

      console.log("my error", error);

    }, () => {

      console.log("completed");

    });
  }
  addCategory(form: NgForm) {
    console.log(form.value);

    var fd = new FormData();

    fd.append("catname", form.value.catName);
    fd.append("Status", form.value.Status);

    console.log(fd);

    this.catService.addCatagory(form.value).subscribe((data: any) => {

      console.log(data);
      this.msg = data;
      this.showCatagoryLIst();
    }, (error: any) => {

      console.log(error);
    })


  }




}
