import { Component } from '@angular/core';
import { ANIMATE } from 'src/assets/animations/animate.animation';
import { LIST_TRIGGER } from 'src/assets/animations/list.animation';
import { SHOWN } from 'src/assets/animations/show.animation';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss'],
  animations: [SHOWN, ANIMATE, LIST_TRIGGER],
})
export class ProComponent {
  isVisible = false;
  width = 1000;
  animate = false;
  elements: number[] = [];

  onToggle(): void {
    this.isVisible = !this.isVisible;
  }

  onShrink(): void {
    this.width -= 100;
  }

  onAnimate(): void {
    this.animate = !this.animate;
  }

  onAddElement(): void {
    this.elements.push(Math.random());
  }
}
