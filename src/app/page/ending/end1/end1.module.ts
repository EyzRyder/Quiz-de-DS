import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End1PageRoutingModule } from './end1-routing.module';

import { End1Page } from './end1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End1PageRoutingModule
  ],
  declarations: [End1Page]
})
export class End1PageModule {}
