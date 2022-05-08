import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { End9Page } from './end9.page';

const routes: Routes = [
  {
    path: '',
    component: End9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class End9PageRoutingModule {}
