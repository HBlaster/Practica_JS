import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcuerdoPage } from './acuerdo.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcuerdoPageRoutingModule {}
