import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TitleInfo {
  title: string;
  id: number;
}

export interface UserInfo {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

  }
  phone: string;
  website: string;
}


@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private httpClinet: HttpClient) {}

  getTitles(): Observable<any> {
    return this.httpClinet.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers(id: number): Observable<any> {
    return this.httpClinet.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
