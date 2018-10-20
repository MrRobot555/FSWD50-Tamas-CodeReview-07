import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import {ContactFormService} from "../shared/contact-form.service";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private customerService: ContactFormService) { }
     submitted: boolean;
     formControls =this.customerService.form.controls;
     showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit(){
         this.submitted = true;
         if(this.customerService.form.valid){
           if(this.customerService.form.get('$key').value == null)
             this.customerService.insertCustomer(this.customerService.form.value);
         else 
            this.customerService.updateCustomer(this.customerService.form.value);
            this.showSuccessMessage = true;
            setTimeout(()=> this.showSuccessMessage=false,3000);
            this.submitted = false;
            this.customerService.form.reset();
         }
         

  }

}
