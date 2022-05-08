import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End7Page } from './end7.page';

const routes: Routes = [
  {
    path: '',
    component: End7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End7PageRoutingModule {}
