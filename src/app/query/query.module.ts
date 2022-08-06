import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';

@NgModule({
  declarations: [QueryComponent],
  imports: [CommonModule, QueryRoutingModule],
})
export class QueryModule {}
