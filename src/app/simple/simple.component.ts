import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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
          height: '100px', // If we don't put "px" it will be percentage: like this --> height: 100
          width: '100px',
        })
      ), // Can use 'background-color' or backgroundColor
      state(
        'clicked',
        style({
          backgroundColor: 'blue',
          height: '250px',
          width: '250px',
        })
      ),
    ]),
  ],
})
export class SimpleComponent {}
