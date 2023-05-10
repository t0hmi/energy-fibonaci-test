import { Component } from '@angular/core';
import { FibonacciService } from './services/fibonacci.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'energy-fibo-test';

  data$: Observable<any> | undefined;

  constructor(private fibonacciService: FibonacciService) { }
  
  callApi() {
    this.data$ = this.fibonacciService.callApi();
  }
}
