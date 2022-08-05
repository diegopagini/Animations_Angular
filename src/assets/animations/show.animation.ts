import { animate, style, transition, trigger } from '@angular/animations';

export const SHOWN = trigger('showState', [
  /**
   * transition('void => *', [animate(300), style({ opacity: 0 })]),
   * transition('* => void', animate(300, style({ opacity: 0 }))),
   */

  // From void to * is the same that use this:
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms', style({ opacity: 0 })),
  ]),
]);
