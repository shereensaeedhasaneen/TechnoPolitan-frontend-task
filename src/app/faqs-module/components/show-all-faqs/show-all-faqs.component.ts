import { Category, CategoryModel, NonCategorizedFaq } from './../../models/category-model';
import { CategoriesService } from './../../services/categories.service';
import { CategoryServiceService } from './../../DataSource/services/category-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {Task} from '../../../task'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-show-all-faqs',
  templateUrl: './show-all-faqs.component.html',
  styleUrls: ['./show-all-faqs.component.scss']
})
export class ShowAllFaqsComponent implements OnInit {
  selectedDivIndex=-1;
  Categorized_Data!:Category[];
  Cotegories_names:Category[]=[];
  nonCategorized_Data!:NonCategorizedFaq[];
  CategoryForm !: FormGroup;
  FaqsForm!:FormGroup;
  htmlContent = '';
  constructor(
     private CategoriesService:CategoriesService,
     config: NgbModalConfig, private modalService: NgbModal

    ) {
      config.backdrop = 'static';
      config.keyboard = false;
    }

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
  open(content: any , SelectedCategoryName:string) {
    this.modalService.open(content);
    this.CategoryForm.get("name")?.patchValue(SelectedCategoryName)
  }

  openEditFaqModal(content:any , faqObject:any){
    this.modalService.open(content);
    console.log(faqObject)
    this.FaqsForm.get("SelectId")?.patchValue(faqObject.SelectId)
    this.FaqsForm.get("answer")?.patchValue(faqObject.answer)
    this.FaqsForm.get("question")?.patchValue(faqObject.question)
  }
  ngOnInit(): void {
    this.CategoryForm=new FormGroup({
      name : new FormControl('' , Validators.required)
    })

    this.FaqsForm=new FormGroup({
      SelectId:new FormControl('',Validators.required),
      answer: new FormControl('' , Validators.required),
      question : new FormControl('' , Validators.required)
    })
    this.CategoriesService.getCategories().subscribe( (res:any)=>{
      this.Categorized_Data=res['data']['categories']

      for(let i = 0 ; i<this.Categorized_Data.length ; i++){

        this.Cotegories_names.push({
          name: res['data']['categories'][i].name,
          id: res['data']['categories'][i].id,
          displayOrder: 0,
          faqs: []
        } )
      }
      this.nonCategorized_Data=res['data']['nonCategorizedFaqs']
      this.nonCategorized_Data.push({id: 245, question: 'ggg16', answer: 'Answer can be added here...<font face="gtRegular">11</font>', displayOrder: 1}
,
{id: 245, question: 'ggg9', answer: 'Answer can be added here...<font face="gtRegular">11</font>', displayOrder: 1}
      )
      console.log(res['data'])
      console.log(this.Cotegories_names)
    }
    )

  }


  drop(event: CdkDragDrop<string[]> ,arr:any) {
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
  }

  EditCategory(catgId : number){
    console.log(this.CategoryForm.value);
    console.log(catgId)
    this.CategoriesService.editCategory(this.CategoryForm.value , catgId).subscribe(res=>{
      console.log(res)
    })
}

deleteCategory(catgId :number){


  Swal.fire({
    title: 'Are You Sure For Deleting This Category ? ',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '',
    //allowOutsideClick: false,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Close',
  }).then((result) => {
      if (result.isConfirmed) {
        this.CategoriesService.deleteCategory(catgId).subscribe(res=>{
             console.log(res)
             Swal.close()
             Swal.fire({
              //position: 'top-end',
            icon: 'success',
            title: 'تم الحذف بنجاح',
            showConfirmButton: false,
            timer: 1400})
            window.location.reload();
          })
      }
  });
}

updateFAQ(){

}
}

