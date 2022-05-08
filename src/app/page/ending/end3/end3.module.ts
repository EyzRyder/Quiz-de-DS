import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End3PageRoutingModule } from './end3-routing.module';

import { End3Page } from './end3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End3PageRoutingModule
  ],
  declarations: [End3Page]
})
export class End3PageModule {}
