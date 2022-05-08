import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End7PageRoutingModule } from './end7-routing.module';

import { End7Page } from './end7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End7PageRoutingModule
  ],
  declarations: [End7Page]
})
export class End7PageModule {}
