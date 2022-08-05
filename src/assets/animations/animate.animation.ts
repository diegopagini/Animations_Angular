import { animate, style, transition, trigger } from '@angular/animations';

export const ANIMATE = trigger('animateState', [
  transition('* => *', [
    // From any to any
    animate(
      400,
      style({
        // The style inside animate will be temporary
        width: 0,
      })
    ),
    animate(
      400,
      style({
        width: '100%',
      })
    ),
  ]),
]);
