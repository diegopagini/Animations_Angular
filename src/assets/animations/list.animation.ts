import { animate, group, style, transition, trigger } from '@angular/animations';

export const LIST_TRIGGER = trigger('listState', [
  transition(':enter', [
    style({
      backgroundColor: '#fff',
      opacity: 0,
    }), // Initial
    group([
      // Animations inside group are executed at the same time
      animate(
        500,
        style({
          opacity: 0.7,
        })
      ),
      animate(
        1000,
        style({
          'background-color': 'red',
        })
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
