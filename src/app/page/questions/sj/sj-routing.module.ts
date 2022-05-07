import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SjPage } from './sj.page';

const routes: Routes = [
  {
    path: '',
    component: SjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SjPageRoutingModule {}
