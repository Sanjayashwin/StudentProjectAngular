import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  updateCart = new EventEmitter();
  constructor(public http: HttpClient) { }

  role: String;

  setServiceData(data: any) {

    // console.log(data)

    this.role=data.role
    console.log("test",this.role)


  }



  getService()
  {

    return localStorage.getItem("token");;
  }


  dologin(data: any)
  {

    //console.log(data);
    return this.http.post("http://localhost:3000/doLogin", data);

  }







}
