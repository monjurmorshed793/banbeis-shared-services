import {Observable} from "rxjs";

export interface CrudService {
  findById: (id: string)=> Observable<any>;
  getAll: ()=> Observable<any>;
  save: (model:any)=> Observable<any>;
  delete: (id: string)=> Observable<any>;
}
