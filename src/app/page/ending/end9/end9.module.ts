import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End9PageRoutingModule } from './end9-routing.module';

import { End9Page } from './end9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End9PageRoutingModule
  ],
  declarations: [End9Page]
})
export class End9PageModule {}
