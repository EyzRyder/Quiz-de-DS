import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndPage } from './end.page';

const routes: Routes = [
  {
    path: '',
    component: EndPage
  },
  {
    path: 'end',
    loadChildren: () => import('../end/end.module').then( m => m.EndPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndPageRoutingModule {}
