import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQsModuleRoutingModule } from './faqs-module-routing.module';
import { ShowAllFaqsComponent } from './components/show-all-faqs/show-all-faqs.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddFaqComponent } from './components/add-faq/add-faq.component';


@NgModule({
  declarations: [
    ShowAllFaqsComponent,
    AddCategoryComponent,
    AddFaqComponent
  ],
  imports: [
    CommonModule,
    FAQsModuleRoutingModule,
    SharedModule
  ],
})
export class FAQsModuleModule { }
