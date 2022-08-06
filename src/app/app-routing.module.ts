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
  {
    path: 'pro',
    loadChildren: () => import('./pro/pro.module').then((m) => m.ProModule),
  },
  {
    path: 'query',
    loadChildren: () =>
      import('./query/query.module').then((m) => m.QueryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
