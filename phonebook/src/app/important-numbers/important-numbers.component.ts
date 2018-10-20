import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {ContactsListComponent} from "../contacts-list/contacts-list.component";
import {ContactFormService} from "../shared/contact-form.service";


@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.css']
})
export class ImportantNumbersComponent implements OnInit {

  constructor(private customerService: ContactFormService) { }





  ngOnInit() {

  }



}
