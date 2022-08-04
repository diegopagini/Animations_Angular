import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultipleComponent } from './multiple.component';

const routes: Routes = [
  {
    path: '',
    component: MultipleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleRoutingModule {}
