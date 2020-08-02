import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  rolename: number;

  mySubscribe: Subscription;
  title = 'ecom';



  constructor(public activateroute: ActivatedRoute) {

    
  }


  ngOnInit() {

  }
  

}
