import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DgPage } from './dg.page';

const routes: Routes = [
  {
    path: '',
    component: DgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DgPageRoutingModule {}
