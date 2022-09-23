import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  items: any[] = [];
  retrievedItemsData: any[] = [];
  item: Item = {
    "id": 0,
    "name": "",
    "price": 0,
    "dateExpired": "",
    "datePurchased": "",
    "dateRemoved": "",
    "disposalType": "",
  };

  dateRemoved: String = "";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    let date = new Date();
    this.dateRemoved =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2)  + '-' + ('0' + date.getDate()).slice(-2);

    this.userService.getAllItemsInStock().subscribe((data: any) => {
      data.forEach((element: Item) => {
        this.items.push({
          "id": element.id,
          "name": element.name,
          "price": element.price,
          "dateExpired": element.dateExpired,
          "datePurchased": element.datePurchased,
          "dateRemoved": element.dateRemoved,
          "disposalType": element.disposalType,
        })
      });
    })

  }

  usedItem(item: Item): void {

    this.item = {
      "id": item.id,
      "name": item.name,
      "price": item.price,
      "dateExpired": item.dateExpired,
      "datePurchased": item.datePurchased,
      "dateRemoved": this.dateRemoved,
      "disposalType": "USED"
    }
    this.userService.editItem(this.item).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }

  wastedItem(item: Item): void {

    this.item = {
      "id": item.id,
      "name": item.name,
      "price": item.price,
      "dateExpired": item.dateExpired,
      "datePurchased": item.datePurchased,
      "dateRemoved": this.dateRemoved,
      "disposalType": "WASTED"
    }
    this.userService.editItem(this.item).subscribe({
      next: (res) => {
        console.log(res)
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }

}
