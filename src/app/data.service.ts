import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // fake generated users for demo only
  getUser() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  getUsers(userId)  {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + userId);
  }
  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
