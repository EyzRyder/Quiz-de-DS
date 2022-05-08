import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End8PageRoutingModule } from './end8-routing.module';

import { End8Page } from './end8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End8PageRoutingModule
  ],
  declarations: [End8Page]
})
export class End8PageModule {}
