import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End4Page } from './end4.page';

const routes: Routes = [
  {
    path: '',
    component: End4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End4PageRoutingModule {}
