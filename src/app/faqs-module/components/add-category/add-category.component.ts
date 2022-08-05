import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {

  CategoryForm !: FormGroup;

  constructor( private router:Router, config: NgbModalConfig, private modalService: NgbModal , private CategoriesService:CategoriesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.CategoryForm=new FormGroup({
      name : new FormControl('' , Validators.required)
    })
  }
  open(content: any) {
    this.modalService.open(content);
  }

  saveCategory(){

    console.log(this.CategoryForm.value);
    this.CategoriesService.postCategories(this.CategoryForm.value).subscribe(res=>{
      console.log(res)
      //this.modalService.dismissAll()
      window.location.reload();
    })

  }
}
