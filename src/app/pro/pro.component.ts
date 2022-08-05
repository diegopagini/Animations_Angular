import { Component } from '@angular/core';
import { ANIMATE } from 'src/assets/animations/animate.animation';
import { SHOWN } from 'src/assets/animations/show.animation';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss'],
  animations: [SHOWN, ANIMATE],
})
export class ProComponent {
  isVisible = false;
  width = 900;
  animate = false;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  shrink(): void {
    this.width -= 100;
  }

  onAnimate(): void {
    this.animate = !this.animate;
  }
}
