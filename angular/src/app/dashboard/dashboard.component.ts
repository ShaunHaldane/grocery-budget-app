import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[] = [];
  retrievedItemsData: any[] = [];
  item: Item = {
    "id": 0,
    "name": "",
    "price": 0,
    "dateExpired": "",
    "datePurchased": "",
    "dateRemoved": "",
    "disposalType": ""
  };

  dateRemoved: String = "";
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemService.getAllItemsInStock().subscribe((data: any) => {
      data.forEach((element: Item) => {
        this.items.push({
          "id": element.id,
          "name": element.name,
          "price": element.price,
          "dateExpired": element.dateExpired,
          "datePurchased": element.datePurchased,
          "dateRemoved": element.dateRemoved,
          "disposalType": element.disposalType
        })
      });
    })

  }

  usedItem(item: Item): void {

    let date = new Date();
    this.dateRemoved =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2)  + '-' + ('0' + date.getDate()).slice(-2);

    this.item = {
      "id": item.id,
      "name": item.name,
      "price": item.price,
      "dateExpired": item.dateExpired,
      "datePurchased": item.datePurchased,
      "dateRemoved": this.dateRemoved,
      "disposalType": "USED"
    }
    this.itemService.editItem(this.item).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }

  wastedItem(item: Item): void {

    let date = new Date();
    this.dateRemoved =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2)  + '-' + ('0' + date.getDate()).slice(-2);

    this.item = {
      "id": item.id,
      "name": item.name,
      "price": item.price,
      "dateExpired": item.dateExpired,
      "datePurchased": item.datePurchased,
      "dateRemoved": this.dateRemoved,
      "disposalType": "WASTED"
    }
    this.itemService.editItem(this.item).subscribe({
      next: (res) => {
        console.log(res)
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }

  deleteItem(id: Number) {
    this.itemService.deleteItem(id).subscribe({
      next: (res) => {
        console.log(res)
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }

}


