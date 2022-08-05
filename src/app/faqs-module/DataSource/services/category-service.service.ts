import { CategoryModel } from './../../models/category-model';
import { IApiRepository } from './../repostories/iapi-repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  Icategory!: IApiRepository;

  categoryList !: CategoryModel[];
  constructor() { }
  displayCategories(url:string):CategoryModel[]{
     this.Icategory.getRequest(url).subscribe(res=>{
      this.categoryList = res;
      console.log(this.categoryList)
     });
return this.categoryList;
  }
}
