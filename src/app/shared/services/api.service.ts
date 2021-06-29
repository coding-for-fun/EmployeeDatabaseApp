import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, Subject, throwError } from 'rxjs';
import { DataService } from './data.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://localhost:3000/'//'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient, private dataService: DataService) { }

  getUserList(d?) {
    let url = (d.empId && d.email) ? `email=${d.email}&id=${d.empId}` : d.empId ? `id=${d.empId}`: `email=${d.email}`
    return this.http.get(`${this.baseUrl}contacts?${url}`).pipe(map(
      data => data,
      error => throwError(error)
    ))
  }

  getUserDetail(id) {
    console.log('getUserDetail==', id)
    return this.http.get(`${this.baseUrl}contacts/${id}`).pipe(map(
      data => data,
      error => throwError(error)
    ))
  }

}
