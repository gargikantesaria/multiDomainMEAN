import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:Http) { }

  userBusinessUrl(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.0.103:3000/api/postBusinesUrl', data).pipe(map(response => response.json())).subscribe((response) => {
          resolve(response)
      }, (err) => {
          reject(err);
      })
    })
  }
  getUserBusinessData(id){
    return new Promise((resolve, reject) => {
      this.http.get(`http://192.168.0.103:3000/api/getBusinessUrl/${id}`).pipe(map(response => response.json())).subscribe((response) => {
          resolve(response)
      }, (err) => {
          reject(err);
      })
    })
  }
}
