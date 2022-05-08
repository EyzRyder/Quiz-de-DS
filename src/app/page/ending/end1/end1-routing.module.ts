import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End1Page } from './end1.page';

const routes: Routes = [
  {
    path: '',
    component: End1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End1PageRoutingModule {}
