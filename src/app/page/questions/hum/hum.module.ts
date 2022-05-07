import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumPageRoutingModule } from './hum-routing.module';

import { HumPage } from './hum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumPageRoutingModule
  ],
  declarations: [HumPage]
})
export class HumPageModule {}
