import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End6PageRoutingModule } from './end6-routing.module';

import { End6Page } from './end6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End6PageRoutingModule
  ],
  declarations: [End6Page]
})
export class End6PageModule {}
