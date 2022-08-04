import { Component } from '@angular/core';
import { TRANSFORM } from 'src/assets/animations/transform.animation';

type State = 'default' | 'clicked';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
  animations: [TRANSFORM],
})
export class MultipleComponent {
  divOne: State = 'default';
  divTwo: State = 'default';
  divThree: State = 'default';

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
}
