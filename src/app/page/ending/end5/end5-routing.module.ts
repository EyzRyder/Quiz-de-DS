import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End5Page } from './end5.page';

const routes: Routes = [
  {
    path: '',
    component: End5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End5PageRoutingModule {}
