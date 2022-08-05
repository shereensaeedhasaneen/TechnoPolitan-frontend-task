import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
const MATERIAL_MODULES = [
  DragDropModule,
  MatExpansionModule,
  MatDividerModule
];

@NgModule({
imports: MATERIAL_MODULES,
exports: MATERIAL_MODULES,
})
export class MaterialModule { }
