import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  updateCart = new EventEmitter();
  constructor() { }

  role: String;

  setServiceData(data: any) {

    // console.log(data)

    this.role=data.role
    console.log("test",this.role)


  }



  getService()
  {

    return this.role;
  }
}
