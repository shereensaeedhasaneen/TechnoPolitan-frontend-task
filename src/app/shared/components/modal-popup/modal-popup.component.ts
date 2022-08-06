import { Category } from './../../../faqs-module/models/category-model';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  @Output() Modal_Form_value :EventEmitter<FormGroup>=new EventEmitter;
  constructor(private activeModal: NgbActiveModal) {}
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

  Click_Modal_Confirmation(FormValue:FormGroup){
    console.log(FormValue)
    this.Modal_Form_value.emit(FormValue)
  }
}
