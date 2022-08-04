import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

type State = 'default' | 'clicked';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('clickedState', [
      state(
        'default',
        style({
          'background-color': 'orange',
          cursor: 'pointer',
          height: '100px', // If we don't put "px" it will be percentage: like this --> height: 100
          width: '100px',
        })
      ), // Can use 'background-color' or backgroundColor
      state(
        'clicked',
        style({
          backgroundColor: 'blue',
          cursor: 'pointer',
          height: '250px',
          width: '250px',
        })
      ),
      transition('default => clicked', animate('250ms 100ms ease-in')), // 'default => clicked' sais when the transition should be fired
    ]),
  ],
})
export class SimpleComponent {
  clickInfo: State = 'default';

  changeStyle(): void {
    if (this.clickInfo === 'default') {
      this.clickInfo = 'clicked';
    } else this.clickInfo = 'default';
  }
}
