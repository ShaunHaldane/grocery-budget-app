import { Component, OnInit } from '@angular/core';
import { AddItemDS } from 'src/models/addItemDS';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: AddItemDS = {
    "name": "",
    "price": 0,
    "dateExpired": "",
    "datePurchased": "",
    "disposalType": "NONE"
  }

  submitted: boolean = false;
  datePurchased: String = "";

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    let date = new Date();
    this.datePurchased =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2)  + '-' + ('0' + date.getDate()).slice(-2)
  }

  saveItem(): void {
    const data = {
      "name": this.item.name.toLowerCase(),
      "price": this.item.price,
      "dateExpired": this.item.dateExpired,
      "datePurchased": this.datePurchased,
      "disposalType": "NONE"
    };
    this.itemService.createItem(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newItem(): void {
    this.submitted = false;
    this.item = {
      "name": "",
      "price": 0,
      "dateExpired": "",
      "datePurchased": "",
      "disposalType": "NONE"
    };
    this.submitted = false;
  }

}
