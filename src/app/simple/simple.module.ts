import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleComponent } from './simple.component';

@NgModule({
  declarations: [SimpleComponent],
  imports: [CommonModule, SimpleRoutingModule],
})
export class SimpleModule {}
