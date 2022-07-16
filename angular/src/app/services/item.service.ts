import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddItemDS } from 'src/models/addItemDS';
import { Item } from 'src/models/item.';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  // Dashboard
  getAllItemsInStock(): Observable<any> {
    return this.http.get(baseUrl+"/items");
  }

  editItem(item: Item): Observable<any> {
    return this.http.put(baseUrl+"/items", item)
  }

  deleteItem(id: Number): Observable<any> {
    return this.http.delete(baseUrl+"/items/"+ id)
  }

  // Add item
  createItem(data: AddItemDS) {
    return this.http.post(baseUrl+"/items/addItem", data);
  }

  // Financial data
  getTotalSpentPerMonthForYear(year: number): Observable<any> {
    return this.http.get(baseUrl+"/financialData/spent/" + year);
  }

  getTotalWastedPerMonthForYear(year: number): Observable<any> {
    return this.http.get(baseUrl+"/financialData/wasted/" + year);
  }

  getTotalUsedPerMonthForYear(year: number): Observable<any> {
    return this.http.get(baseUrl+"/financialData/used/" + year);
  }

  getTotalSpentForAllItems(): Observable<any> {
    return this.http.get(baseUrl+"/financialData/spent/items");
  }

  getTotalWastedForAllItems(): Observable<any> {
    return this.http.get(baseUrl+"/financialData/wasted/items");
  }
  
  getTotalUsedForAllItems(): Observable<any> {
    return this.http.get(baseUrl+"/financialData/used/items");
  }

}

