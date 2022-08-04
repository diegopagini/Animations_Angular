import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

type State = 'default' | 'clicked' | 'mousedown';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  animations: [
    trigger('clickedState', [
      // States
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
      state(
        'mousedown',
        style({
          'background-color': 'red',
          border: '1px solid black',
          cursor: 'pointer',
          height: '100px',
          width: '250px',
        })
      ),
      // Transitions
      transition('default => clicked', animate('250ms 100ms ease-in')), // 'default => clicked' sais when the transition should be fired
      transition('clicked => default', animate('500ms 100ms ease-out')), // 'clicked => default' sais when the transition should be fired
      transition('default <=> mousedown', animate('250ms 50ms ease-in')), // <=> for both states, from default to mousedown and
      // mouse down to default
    ]),
  ],
})
export class SimpleComponent {
  clickInfo: State = 'default';

  changeClickInfoState(): void {
    if (this.clickInfo === 'default') this.clickInfo = 'clicked';
    else this.clickInfo = 'default';
  }

  onMouseEnter(): void {
    this.clickInfo = 'mousedown';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 1000);
  }
}
