import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DgPageRoutingModule } from './dg-routing.module';

import { DgPage } from './dg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DgPageRoutingModule
  ],
  declarations: [DgPage]
})
export class DgPageModule {}
