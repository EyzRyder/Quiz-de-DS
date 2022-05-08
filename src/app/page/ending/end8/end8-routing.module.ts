import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End8Page } from './end8.page';

const routes: Routes = [
  {
    path: '',
    component: End8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End8PageRoutingModule {}
