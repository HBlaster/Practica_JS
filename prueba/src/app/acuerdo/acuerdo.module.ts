import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuerdoPageRoutingModule } from './acuerdo-routing.module';

import { AcuerdoPage } from './acuerdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuerdoPageRoutingModule
  ],
  declarations: [AcuerdoPage]
})
export class AcuerdoPageModule {}
