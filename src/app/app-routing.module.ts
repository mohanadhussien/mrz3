import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P5Component } from './p5/p5.component';
import { P6Component } from './p6/p6.component';
import { P7Component } from './p7/p7.component';
import { P8Component } from './p8/p8.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'Product',component:ProductComponent},
  {path:'',component:HomeComponent},
  {path:'product1',component:P1Component},
  {path:'product2',component:P2Component},
  {path:'product3',component:P3Component},
  {path:'product4',component:P4Component},
  {path:'product5',component:P5Component},
  {path:'product6',component:P6Component},
  {path:'product7',component:P7Component},
  {path:'product8',component:P8Component},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
