import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';


const routes: Routes = [
{
   path: '', component: HomePageComponent
},
{
   path: 'contact-form', component: ContactFormComponent
},
{
   path: 'important', component: ImportantNumbersComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
