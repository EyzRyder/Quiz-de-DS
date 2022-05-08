import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End6Page } from './end6.page';

const routes: Routes = [
  {
    path: '',
    component: End6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End6PageRoutingModule {}
