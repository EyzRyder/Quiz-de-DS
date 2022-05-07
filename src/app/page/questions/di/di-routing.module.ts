import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiPage } from './di.page';

const routes: Routes = [
  {
    path: '',
    component: DiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiPageRoutingModule {}
