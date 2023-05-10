import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-response',
  templateUrl: './data-response.component.html',
  styleUrls: ['./data-response.component.scss']
})
export class DataResponseComponent {
  @Input() params = null;
  @Input() fibonacci = 0;
}
