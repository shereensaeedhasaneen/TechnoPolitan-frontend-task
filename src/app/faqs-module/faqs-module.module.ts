import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQsModuleRoutingModule } from './faqs-module-routing.module';
import { ShowAllFaqsComponent } from './components/show-all-faqs/show-all-faqs.component';


@NgModule({
  declarations: [
    ShowAllFaqsComponent
  ],
  imports: [
    CommonModule,
    FAQsModuleRoutingModule,
    SharedModule
  ],
})
export class FAQsModuleModule { }
