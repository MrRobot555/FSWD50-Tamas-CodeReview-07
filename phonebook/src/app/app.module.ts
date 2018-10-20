import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactFormService} from "./shared/contact-form.service";
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ContactFormComponent,
    ContactsListComponent,
    ImportantNumbersComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  
  providers: [ContactFormService],
  bootstrap: [AppComponent]
})

export class AppModule { }
