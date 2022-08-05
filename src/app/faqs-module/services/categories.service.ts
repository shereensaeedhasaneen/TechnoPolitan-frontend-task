import { Category, CategoryModel } from './../models/category-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl : string = "https:/mocawebsitebackend.techno-politan.xyz/api/v1/Categories";
  constructor(private http:HttpClient) { }

  getCategories():Observable<CategoryModel>{
     return this.http.get<CategoryModel>(`${this.baseUrl}?WithFaqs=true&WithNonCategorizedFaqs=true`)
  }

  postCategories(model:Category):Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${this.baseUrl}`,model)
 }

 editCategory(model:Category , CategoryId:number):Observable<CategoryModel>{
  return this.http.put<CategoryModel>(`${this.baseUrl}/${CategoryId}`,model)
}

  deleteCategory(CategoryId:number):Observable<CategoryModel>{
    return this.http.delete<CategoryModel>(`${this.baseUrl}/${CategoryId}?DeleteRelatedFaqs=true`)
  }
}
