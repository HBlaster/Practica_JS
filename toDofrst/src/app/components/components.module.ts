import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListasComponent} from './listas/listas.component'


@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListasComponent
  ]
})
export class ComponentsModule { }
export { ListasComponent };

