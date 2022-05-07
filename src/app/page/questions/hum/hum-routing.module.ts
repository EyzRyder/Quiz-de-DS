import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumPage } from './hum.page';

const routes: Routes = [
  {
    path: '',
    component: HumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumPageRoutingModule {}
