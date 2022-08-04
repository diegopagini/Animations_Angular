import { animate, state, style, transition, trigger } from '@angular/animations';

export const NUMBER_ENTERED = trigger('numberEnteredState', [
  // States
  state(
    'unselected',
    style({
      border: '1px solid black',
      padding: '1rem',
    })
  ),
  state(
    'selected',
    style({
      backgroundColor: 'lightblue',
      border: '2px solid blue',
      padding: '0.9375rem',
    })
  ),

  // Transitions
  transition('unselected => selected', [
    // Because this is an array of animations we can use many to concat it.
    // From where to where
    style({
      // This styles will change instantly
      border: '2px solid black',
      padding: '0.9375rem',
    }),
    animate(500), // This is the time that takes change from "unselected" to "selected"
    style({
      backgroundColor: 'red',
      border: '1px solid red',
      padding: '0.9375rem',
    }),
    animate(250), // This. style will be temporal
  ]),
]);
