import { R3PipeDependencyMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { DepandServicesService } from './depand-services.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private dService: DepandServicesService) {
    console.log(dService.log())
   }

  display(){
    return "Welcome to ASLab";
  }

  getValue(v: string){
    console.log(v);
  }
}
