import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FaComponent } from './fa/fa.component';
import { FbComponent } from './fb/fb.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '' ,component: FirstComponent,
    children:[{
      path: 'fa-a', component: FaComponent,
    },{
      path: 'fa-b', component: FbComponent,
    }
  
  ]
  },{
    path: 's' ,component: SecondComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
