import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MultipleRoutingModule } from './multiple-routing.module';
import { MultipleComponent } from './multiple.component';

@NgModule({
  declarations: [MultipleComponent],
  imports: [CommonModule, MultipleRoutingModule, FormsModule],
})
export class MultipleModule {}
