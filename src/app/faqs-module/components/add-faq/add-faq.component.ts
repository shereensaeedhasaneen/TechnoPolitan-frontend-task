import { FaqServiceService } from './../../services/faq-service.service';
import { Category } from './../../models/category-model';
import { CategoriesService } from './../../services/categories.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss']
})
export class AddFaqComponent implements OnInit {

  CategoryForm !: FormGroup;
  @Input() Cotegories_names!: Category[]
  htmlContent = '';
 SelectId:number=0

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
  constructor(config: NgbModalConfig, private modalService: NgbModal , private FaqService:FaqServiceService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.CategoryForm=new FormGroup({
      SelectId:new FormControl('',Validators.required),
      answer: new FormControl('' , Validators.required),
      question : new FormControl('' , Validators.required)
    })
  }

  open(content: any) {
    this.modalService.open(content);
  }

  saveCategory(){
    let model = {question: this.CategoryForm.controls.question.value , answer:this.CategoryForm.controls.answer.value }
    console.log(model)
    this.FaqService.Add_Faqs(model , +this.CategoryForm.controls.SelectId.value).subscribe(res=>{
      console.log(res)
    });
  }

}
