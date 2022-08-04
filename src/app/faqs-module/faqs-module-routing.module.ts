import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllFaqsComponent } from './components/show-all-faqs/show-all-faqs.component';

const routes: Routes = [
  {path:'' , component:ShowAllFaqsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FAQsModuleRoutingModule { }
