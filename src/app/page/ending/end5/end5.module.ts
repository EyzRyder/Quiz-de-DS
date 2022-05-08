import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { End5PageRoutingModule } from './end5-routing.module';

import { End5Page } from './end5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    End5PageRoutingModule
  ],
  declarations: [End5Page]
})
export class End5PageModule {}
