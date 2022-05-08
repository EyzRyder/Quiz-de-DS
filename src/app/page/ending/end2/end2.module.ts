import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End2PageRoutingModule } from './end2-routing.module';

import { End2Page } from './end2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End2PageRoutingModule
  ],
  declarations: [End2Page]
})
export class End2PageModule {}
