import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: "<h1>This is Template meta data</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  description = 'MongoDb, ExpressJs, AngularJs, NodeJs'
}

