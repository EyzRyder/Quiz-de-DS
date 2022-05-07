import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvPageRoutingModule } from './ev-routing.module';

import { EvPage } from './ev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvPageRoutingModule
  ],
  declarations: [EvPage]
})
export class EvPageModule {}
