import { Category, CategoryModel } from './../../models/category-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { RequestParametersModel } from '../../models/request-parameters-model';
import { IApiRepository } from './../repostories/iapi-repository';

export class CategoryOperations implements IApiRepository{

  constructor(private http:HttpClient){}

  getRequest(Parameters: string): Observable<any> {
    return this.http.get(Parameters);
  }

  // postRequest(Parameters: RequestParametersModel): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }
  // putRequest(Parameters: RequestParametersModel): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }
  // deleteRequest(Parameters: RequestParametersModel): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }
}
