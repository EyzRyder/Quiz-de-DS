import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvPage } from './ev.page';

const routes: Routes = [
  {
    path: '',
    component: EvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvPageRoutingModule {}
