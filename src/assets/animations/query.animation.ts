import { animate, query, style, transition, trigger } from '@angular/animations';

export const QUERY = trigger('queryAnimation', [
  transition('* => goAnimate', [
    query('section', animate(1000, style({ backgroundColor: 'yellow' }))),
    query(
      '#title',
      animate(
        1000,
        style({ backgroundColor: 'red', transform: 'translateX(100px)' })
      )
    ),
    query(
      '.subtitle',
      animate(
        1000,
        style({ backgroundColor: 'blue', transform: 'translateX(-100px)' })
      )
    ),
    query(
      'p',
      animate(
        1000,
        style({ backgroundColor: 'green', transform: 'translateX(100px)' })
      )
    ),
  ]),
]);
