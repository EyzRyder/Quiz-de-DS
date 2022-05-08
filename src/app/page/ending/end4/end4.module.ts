import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End4PageRoutingModule } from './end4-routing.module';

import { End4Page } from './end4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End4PageRoutingModule
  ],
  declarations: [End4Page]
})
export class End4PageModule {}
