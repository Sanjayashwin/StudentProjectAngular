import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  rolename: number;

  mySubscribe: Subscription;
  title = 'ecom';



  constructor(public activateroute: ActivatedRoute) {

    
  }


  ngOnInit() {
    this.mySubscribe = this.activateroute.params.subscribe((param: Params) => {

      const id = +param['id'];
      console.log(id)

      this.rolename = param.catId;
      console.log(this.rolename)

    })
  }
  ngOnDestroy() {

    console.log("Component destroyed");

    this.mySubscribe.unsubscribe();
  }
}
