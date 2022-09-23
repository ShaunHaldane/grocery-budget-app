import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { AddItemDS } from '../models/addItemDS';

const API_URL = "http://grocerybudgetapp-env.eba-tgqrgibs.us-east-1.elasticbeanstalk.com/api/";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  // Dashboard
  getAllItemsInStock(): Observable<any> {
    return this.http.get(API_URL + "user/items");
  }

  editItem(item: Item): Observable<any> {
    return this.http.put(API_URL + "user/items", item)
  }

  // Add item
  createItem(data: AddItemDS) {
    return this.http.post(API_URL + "user/items/addItem", data);
  }

  // Financial data
  getTotalSpentPerMonthForYear(year: number): Observable<any> {
    return this.http.get(API_URL + "user/financialData/spent/" + year);
  }

  getTotalWastedPerMonthForYear(year: number): Observable<any> {
    return this.http.get(API_URL + "user/financialData/wasted/" + year);
  }

  getTotalUsedPerMonthForYear(year: number): Observable<any> {
    return this.http.get(API_URL + "user/financialData/used/" + year);
  }

  getTotalSpentForAllItems(): Observable<any> {
    return this.http.get(API_URL + "user/financialData/spent/items");
  }

  getTotalWastedForAllItems(): Observable<any> {
    return this.http.get(API_URL + "user/financialData/wasted/items");
  }
  
  getTotalUsedForAllItems(): Observable<any> {
    return this.http.get(API_URL + "user/financialData/used/items");
  }

  
}
