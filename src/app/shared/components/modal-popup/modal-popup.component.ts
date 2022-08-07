import { Category } from './../../../faqs-module/models/category-model';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ShowAllFaqsComponent } from '../../../faqs-module/components/show-all-faqs/show-all-faqs.component';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss'],
  providers:[ShowAllFaqsComponent]
})
export class ModalPopupComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal ,private showComponent:ShowAllFaqsComponent ) {}
  @Input() public Modal_Data: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
    console.log(this.Modal_Data)
    if(this.Modal_Data.categries){
      this.Modal_Data.fields[0]['templateOptions'].options=this.Modal_Data.categries.map((el:Category)=>{return {label:el.name , value:el.id}})
    }
  }

  Click_Modal_Confirmation(formValue:any , functionName:string){
    console.log(formValue)
    this.showComponent.Call_Api_Methods(formValue , functionName)
  }
}
