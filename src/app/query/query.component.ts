import { Component } from '@angular/core';
import { QUERY } from 'src/assets/animations/query.animation';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  animations: [QUERY],
})
export class QueryComponent {
  animation = '';

  onAnimate(): void {
    this.animation = 'goAnimate';
  }
}
