import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'simple',
    loadChildren: () =>
      import('./simple/simple.module').then((m) => m.SimpleModule),
  },
  {
    path: 'multiple',
    loadChildren: () =>
      import('./multiple/multiple.module').then((m) => m.MultipleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
