import { Component } from '@angular/core';
import { NUMBER_ENTERED } from 'src/assets/animations/number-entered.animation';
import { TRANSFORM } from 'src/assets/animations/transform.animation';

type State = 'default' | 'clicked';

type InputEvent = {
  target: {
    value: number;
  };
};

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
  animations: [TRANSFORM, NUMBER_ENTERED], // Animations
})
export class MultipleComponent {
  divOne: State = 'default';
  divTwo: State = 'default';
  divThree: State = 'default';
  numberEntered: number;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  changeStateOne(): void {
    if (this.divOne === 'default') this.divOne = 'clicked';
    else this.divOne = 'default';
  }

  changeStateTwo(): void {
    if (this.divTwo === 'default') this.divTwo = 'clicked';
    else this.divTwo = 'default';
  }

  changeStateThree(): void {
    if (this.divThree === 'default') this.divThree = 'clicked';
    else this.divThree = 'default';
  }

  onInputNumber(event: any): void {
    this.numberEntered = (event as InputEvent).target.value;

    setTimeout(() => {
      this.numberEntered = 0;
    }, 2500);
  }
}
