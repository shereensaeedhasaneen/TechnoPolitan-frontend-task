import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestParametersModel } from '../../models/request-parameters-model';
import { IApiRepository } from './../repostories/iapi-repository';

export class CategoryOperations implements IApiRepository{

  constructor(private http:HttpClient){}

  getRequest(Parameters: RequestParametersModel): Observable<any> {
    return this.http.get(Parameters.Url);
  }

  postRequest(Parameters: RequestParametersModel): Observable<any> {
    throw new Error('Method not implemented.');
  }
  putRequest(Parameters: RequestParametersModel): Observable<any> {
    throw new Error('Method not implemented.');
  }
  deleteRequest(Parameters: RequestParametersModel): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
