import { Component } from '@angular/core';
import { SHOWN } from 'src/assets/animations/show.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SHOWN],
})
export class AppComponent {}
