import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiPageRoutingModule } from './di-routing.module';

import { DiPage } from './di.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiPageRoutingModule
  ],
  declarations: [DiPage]
})
export class DiPageModule {}
