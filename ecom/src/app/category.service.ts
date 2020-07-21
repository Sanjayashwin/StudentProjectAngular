import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  addCatagory(data: any) {
    console.log("test",data)
    return this.http.post("http://localhost:3000/addCatagory", data);
  }

  addSubCatagory(data: any) {
    return this.http.post("http://localhost:3000/addSubCatagory", data);
  }

  getCatagoryList()
  {

    return this.http.get("http://localhost:3000/getCategoryList");

  }

  getSubCatagoryList()
  {

    return this.http.get("http://localhost:3000/getCategoryList");

  }

  getSubcatagoryById(CatId:any)
  {
    return this.http.get("http://localhost:3000/getSubcatagoryById/"+CatId)
  }



}
