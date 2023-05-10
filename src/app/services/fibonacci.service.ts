import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  private API_URL = 'http://0.0.0.0:8080/fibo/10/10';

  callApi() {
     return this.http.get(this.API_URL);
  }
}
