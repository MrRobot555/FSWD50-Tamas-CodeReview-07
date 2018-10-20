import { Component, OnInit } from '@angular/core';
import {ContactFormService} from "../shared/contact-form.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor(private customerService: ContactFormService) { }
   contactArray =[];
   showDeletedMessage : boolean;
   searchText:string = "";

 ngOnInit() {
       this.customerService.getCustomers().subscribe(
                 (list) => {
                         this.contactArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()

                                }
                        })
                 });
 }
  onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.customerService.deleteCustomer($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

   filterCondition(customer){
     return customer.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || customer.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
   }


}
