import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SjPageRoutingModule } from './sj-routing.module';

import { SjPage } from './sj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SjPageRoutingModule
  ],
  declarations: [SjPage]
})
export class SjPageModule {}
