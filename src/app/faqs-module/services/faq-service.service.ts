import { Faq } from './../models/category-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  baseUrl : string = "https:/mocawebsitebackend.techno-politan.xyz/api/v1/Faqs/";
  constructor(private http:HttpClient) { }
  Add_Faqs(model:Partial<Faq> , categoryId:number):Observable<Faq>{
    return this.http.post<Faq>(`${this.baseUrl}/Category/${categoryId}`,model)
 }

 edit_Faq(model:Faq , FaqId:number):Observable<Faq>{
  return this.http.put<Faq>(`${this.baseUrl}/${FaqId}`,model)
}

  delete_faq(faqId:number):Observable<Faq>{
    return this.http.delete<Faq>(`${this.baseUrl}/${faqId}`)
  }
}
