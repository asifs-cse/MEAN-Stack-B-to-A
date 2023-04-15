import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepandServicesService {
  message = 'My service data';
  constructor() { }

  log(){
    return this.message;
  }
}
