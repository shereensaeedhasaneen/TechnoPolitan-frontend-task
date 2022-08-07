import { ModalPopupComponent } from './../../../shared/components/modal-popup/modal-popup.component';
import { Category, NonCategorizedFaq } from './../../models/category-model';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Faq } from '../../models/category-model';
import { FaqServiceService } from '../../services/faq-service.service';

@Component({
  selector: 'app-show-all-faqs',
  templateUrl: './show-all-faqs.component.html',
  styleUrls: ['./show-all-faqs.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ShowAllFaqsComponent implements OnInit {
  selectedDivIndex=-1;
  Categorized_Data!:Category[];
  nonCategorized_Data!:NonCategorizedFaq[];
  Cotegories_names:Category[]=[];
  CategoryModelInEdit:Category={
    id: 0,
    name: '',
    displayOrder: 0,
    faqs: []
  }

  FAQsModelInEdit:Faq={
    id: 0,
    question: '',
    answer: '',
    displayOrder: 0
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
  //// Start Create FAQs Form Dynamicly ////
  Add_Faqs_form = new FormGroup({});
  Add_Faqs_model = {id:'',categories:'' ,answer:'' ,question:''};
  Add_Faqs_fields?: FormlyFieldConfig[] = [

    {
      key: 'categories',
      type: 'select',

      templateOptions: {
        options: [],
        required: true,
      }
    },
    {
      key: 'id',
    },

    {
      key: 'question',
      type: 'input',
      templateOptions: {
        label: 'Enter your question',
        placeholder: 'Your question',
        required: true,
      }
    },

    {
      key: 'answer',
      templateOptions: {
        required: true,
      }
    }

  ];
  Add_Faqs_Modal_Data={
    Modal_title : "Add FAQ",
    FormGroupName: this.Add_Faqs_form,
    hasRichEditor:true,
    categries:this.Cotegories_names,
    model : this.Add_Faqs_model,
    fields: this.Add_Faqs_fields,
    Confirmation_button_text:'Save FAQ'
  };
 //// End Create FAQs Form Dynamicly ////
//// Edit FAQS data ///////

Edit_Faqs_form = new FormGroup({});
Edit_Faqs_model = this.FAQsModelInEdit;
Edit_Faqs_fields: FormlyFieldConfig[] = [
 {
   key: 'categories',
   type: 'select',

   templateOptions: {
     options: [],
     required: true,
   }
 },
 {
   key: 'id',
 },

 {
   key: 'question',
   type: 'input',
   templateOptions: {
     label: 'Enter your question',
     placeholder: 'Your question',
     required: true,
   }
 },

 {
   key: 'answer',
   templateOptions: {
     required: true,
   }
 }
];
Edit_Faqs_Modal_Data={
  Modal_title : "Edit FAQ",
  FormGroupName: this.Edit_Faqs_form,
  hasRichEditor:true,
  categries:this.Cotegories_names,
  model : this.Edit_Faqs_model,
  fields: this.Edit_Faqs_fields,
  Confirmation_button_text:"Edit FAQ"
}
//// Edit category data ///////

  //// Start Create Category Form Dynamicly ////
  Add_Category_form = new FormGroup({});
  Add_Category_model = { name: ''};
  Add_Category_fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Enter Category Name',
        placeholder: 'Category Name',
        required: true,
      }
    }
  ];
  Add_Category_Modal_Data={
    Modal_title : "Add Category",
    FormGroupName: this.Add_Category_form,
    hasRichEditor:false,
    model : this.Add_Category_model,
    fields: this.Add_Category_fields,
    Confirmation_button_text:"Save Category"
  };
 //// End Create Category Form Dynamicly ////

 //// Edit category data ///////

 Edit_Category_form = new FormGroup({});
 Edit_Category_model = this.CategoryModelInEdit;
 Edit_Category_fields: FormlyFieldConfig[] = [
   {
     key: 'name',
     type: 'input',
     templateOptions: {
       label: 'Enter Category Name',
       placeholder: 'Category Name',
       required: true,
     }
   },
   {
    key: 'id',
  }
 ];
 Edit_Category_Modal_Data={
   Modal_title : "Edit Category",
   FormGroupName: this.Edit_Category_form,
   hasRichEditor:false,
   model : this.Edit_Category_model,
   fields: this.Edit_Category_fields,
   Confirmation_button_text:"Edit Category"
 };
 //// Edit category data ///////




  constructor(
     private CategoriesService:CategoriesService,
     private FaqService:FaqServiceService,
     config: NgbModalConfig, private modalService: NgbModal)
      {
        config.backdrop = 'static';
        config.keyboard = false;
      }


  ngOnInit(): void {

    this.CategoriesService.getCategories().subscribe( (res:any)=>{
      this.Categorized_Data=res['data']['categories']
      for(let i = 0 ; i<this.Categorized_Data.length ; i++){

        this.Cotegories_names.push({
          name: res['data']['categories'][i].name,
          id: res['data']['categories'][i].id,
        } )
      }
      console.log('%%%%%%%')
      console.log(this.Cotegories_names)
      this.nonCategorized_Data=res['data']['nonCategorizedFaqs']
    }
    )

  }


  drop(event: CdkDragDrop<string[]> ,arr:any) {
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
  }


  openModal(modalData:any , Pass_selected_obj?:any) {
    const modalRef = this.modalService.open(ModalPopupComponent );
    modalRef.componentInstance.Modal_Data = modalData;

    // pass Category data in form model //
    this.CategoryModelInEdit.name=Pass_selected_obj.name;
    this.CategoryModelInEdit.id=Pass_selected_obj.id;

    /// pass Faq Data in Form Model //
    this.FAQsModelInEdit.id=Pass_selected_obj.id;
    this.FAQsModelInEdit.answer=Pass_selected_obj.answer;
    this.FAQsModelInEdit.question = Pass_selected_obj.question;

    modalRef.result.then((result) => {
      console.log(result);

    }).catch((error) => {
      console.log(error);
    });
  }

  Call_Api_Methods(Form_Value:any , functionName:string){
    console.log(Form_Value)
    switch(functionName){
      case 'Add Category':
        this.AddCategory(Form_Value)
        break;
      case 'Edit Category':
        this.EditCategory(Form_Value,Form_Value.id)
        break;
      // case 'Add FAQ':
      //   this.AddFAQs(Form_Value)
      //   break;
      // case 'Edit FAQ':
      //   this.EditFAQ(Form_Value , Form_Value.id)

    }

  }

  AddCategory(Category_Form_Value:Category){
    console.log(Category_Form_Value)
    this.CategoriesService.postCategories(Category_Form_Value).subscribe(res=>{
      console.log(res)
      window.location.reload();
    })
  }

  EditCategory(Category_Form_Value:Category,catgId : number){
    this.CategoriesService.editCategory(Category_Form_Value , catgId).subscribe(res=>{
      console.log(res)
      window.location.reload();
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
      confirmButtonText: 'Delete',
      cancelButtonText: 'Close',
    }).then((result) => {
        if (result.isConfirmed) {
          this.CategoriesService.deleteCategory(catgId).subscribe(res=>{
              console.log(res)
              Swal.close()
              Swal.fire({
              icon: 'success',
              title: 'تم الحذف بنجاح',
              showConfirmButton: false,
              timer: 1400})
              window.location.reload();
            })
        }
    });
  }

  AddFAQs(Faqs_Form_Value:Faq){
    console.log(Faqs_Form_Value)
    // this.FaqService.Add_Faqs(Faqs_Form_Value , +this.CategoryForm.controls.SelectId.value).subscribe(res=>{
    //   console.log(res)
    // });
  }

  EditFAQ(Faqs_Form_Value:Faq,faqId : number){
    this.FaqService.edit_Faq(Faqs_Form_Value , faqId).subscribe(res=>{
      console.log(res)
      window.location.reload();
    })
  }

  deleteFAQ(faqID :number){
    Swal.fire({
      title: 'Are You Sure For Deleting This Category ? ',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Close',
    }).then((result) => {
        if (result.isConfirmed) {
          this.FaqService.delete_faq(faqID).subscribe(res=>{
              console.log(res)
              Swal.close()
              Swal.fire({
              icon: 'success',
              title: 'تم الحذف بنجاح',
              showConfirmButton: false,
              timer: 1400})
              window.location.reload();
            })
        }
    });
  }


}


