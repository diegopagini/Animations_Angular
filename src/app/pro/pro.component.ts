import { AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core';
import { ANIMATE } from 'src/assets/animations/animate.animation';
import { LIST_TRIGGER } from 'src/assets/animations/list.animation';
import { SHOWN } from 'src/assets/animations/show.animation';
import Swal from 'sweetalert2';

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

  onAnimationStart(start: AnimationEvent): void {
    console.log({ start });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Animation Start',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  onAnimationDone(done: AnimationEvent): void {
    console.log({ done });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Animation End',
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
