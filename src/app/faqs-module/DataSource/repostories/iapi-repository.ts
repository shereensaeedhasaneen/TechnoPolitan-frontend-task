import { RequestParametersModel } from './../../models/request-parameters-model';
import { Observable } from "rxjs";

export interface IApiRepository {
  getRequest(Parameters:RequestParametersModel) : Observable<any>;

  postRequest(Parameters:RequestParametersModel) : Observable<any>;

  putRequest(Parameters:RequestParametersModel) : Observable<any>;

  deleteRequest(Parameters:RequestParametersModel) : Observable<any>
}
