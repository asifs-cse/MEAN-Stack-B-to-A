import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channel.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  title = "Welcome to angular turorial";

  items: any[] = [
    'name',"fame", "wealth"
  ];

  constructor(private chServices: ChannelService) {}

  ngOnInit():void{
    this.f();
  }
  f(){
    this.chServices.getValue(this.title)
  }

  sum(){
    return 50+60;
  }

  message(){
    return this.chServices.display();
  }

}
