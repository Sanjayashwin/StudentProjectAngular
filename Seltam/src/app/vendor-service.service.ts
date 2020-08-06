import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(public http: HttpClient) { }


  addVendor(data: any) {
    return this.http.post("http://localhost:3000/vendorRegister", data);
  }



  getPendingVendorList() {

    return this.http.get("http://localhost:3000/getPendingVendorList");
  }

  getpendingVendorListById(VenodrID: any) {
    //console.log(VenodrID);
    return this.http.get("http://localhost:3000/getPendingVendorListByID/" + VenodrID);


  }


  ApproveVendorById(VenodrID: any) {
    console.log(VenodrID);
    return this.http.post("http://localhost:3000/ApproveVendorById/", VenodrID);


  }

  RejectVendorById(VenodrID: any) {
    console.log(VenodrID);
    return this.http.post("http://localhost:3000/RejectVendorById/", VenodrID);


  }

  getApprovedVendorList() {

    return this.http.get("http://localhost:3000/getApprovedVendorList");
  }

  getRejectedVendorList() {

    return this.http.get("http://localhost:3000/getRejectedVendorList");
  }


  SendLoginDetails(data: any) {
    console.log("login details obj", data)

    return this.http.post("http://localhost:3000/SendLoginDetails", data);
  }



  addDesignTemplate(data: any) {

    return this.http.post("http://localhost:3000/AddDesignPattern", data);
  }


  getDesignTemplateById(DesignID:any)
  {
    return this.http.get("http://localhost:3000/DesignTemplateById/" + DesignID);
  }
}


