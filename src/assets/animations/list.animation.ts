import { animate, group, keyframes, style, transition, trigger } from '@angular/animations';

export const LIST_TRIGGER = trigger('listState', [
  transition(':enter', [
    style({
      backgroundColor: '#fff',
      opacity: 0,
    }), // Initial
    group([
      // Animations inside group are executed at the same time
      animate(
        1000,
        style({
          opacity: 0.7,
        })
      ),
      animate(
        '5000ms ease-out', // keyframes allow us to split this duration between all styles inside
        keyframes([
          style({
            'background-color': '#fff',
            offset: 0,
          }),
          style({
            'background-color': 'red',
            offset: 0.8,
          }),
          style({
            'background-color': 'green',
            offset: 1,
          }),
        ])
      ),
    ]),
    animate(
      500,
      style({
        'background-color': 'lightblue',
      })
    ),
  ]),
  transition(
    ':leave',
    animate(
      300,
      style({
        opacity: 0,
      })
    )
  ),
]);
