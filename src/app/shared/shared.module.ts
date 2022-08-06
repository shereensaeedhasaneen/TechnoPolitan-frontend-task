import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from '../material/material.module'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ButtonComponent } from './components/button/button.component';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ModalPopupComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ],
  exports:[
    HeaderComponent,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    ButtonComponent,
    ModalPopupComponent,
    FormlyModule,
    FormlyBootstrapModule
  ]
})
export class SharedModule { }
