import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../material/material.module'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    NgbModule,
    MaterialModule
  ]
})
export class SharedModule { }
