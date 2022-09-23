import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://grocerybudgetapp-env.eba-tgqrgibs.us-east-1.elasticbeanstalk.com/api/";

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'admin/panel');
  }
  
}
