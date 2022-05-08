import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End2Page } from './end2.page';

const routes: Routes = [
  {
    path: '',
    component: End2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End2PageRoutingModule {}
