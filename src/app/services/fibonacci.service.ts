import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  private API_URL = 'https://ecotype-9.nantes.http8080.proxy.grid5000.fr/fibo/10/10';

  callApi() {
    const header = new HttpHeaders();
    return this.http.get(this.API_URL);
  }

}