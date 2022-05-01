import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtimPageRoutingModule } from './etim-routing.module';

import { EtimPage } from './etim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtimPageRoutingModule
  ],
  declarations: [EtimPage]
})
export class EtimPageModule {}
