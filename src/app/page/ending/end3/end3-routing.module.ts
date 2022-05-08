import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End3Page } from './end3.page';

const routes: Routes = [
  {
    path: '',
    component: End3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End3PageRoutingModule {}
