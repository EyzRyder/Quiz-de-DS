import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndPage } from './end.page';

const routes: Routes = [
  {
    path: '',
    component: EndPage
  },
  {
    path: 'end1',
    loadChildren: () => import('./end1/end1.module').then( m => m.End1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndPageRoutingModule {}
