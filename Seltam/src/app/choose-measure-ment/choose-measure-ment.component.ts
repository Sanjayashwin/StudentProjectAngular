import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-choose-measure-ment',
  templateUrl: './choose-measure-ment.component.html',
  styleUrls: ['./choose-measure-ment.component.css']
})
export class ChooseMeasureMentComponent implements OnInit {

  Vid: number;
  designId: number;
  mySubscribe: Subscription;
  constructor(public activateroute: ActivatedRoute) {



  }

  ngOnInit(): void {
    console.log("ngOnInit invoked");

    // console.log(this.activateroute.params._value.catId);

    // this.myCatId = this.activateroute.params._value.catId;

    this.mySubscribe = this.activateroute.params.subscribe((param: Params) => {

      console.log("parameter changed");

      this.Vid = param.Vid;
      this.designId = param.Designid;

      console.log(this.Vid)
      console.log(this.designId)



    })


  }

}
