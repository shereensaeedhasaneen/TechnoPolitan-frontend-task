import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {

  CategoryForm !: FormGroup;
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.CategoryForm=new FormGroup({
      categoryName : new FormControl('' , Validators.required)
    })
  }
  open(content: any) {
    this.modalService.open(content);
  }

  saveCategory(){
    console.log(this.CategoryForm.value)
  }
}
