import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {INavigation} from "../../models/navigation";
import {Observable} from "rxjs";
import {APP_URL} from "../../banbeis-shared-services.module";

type EntityResponseType = HttpResponse<INavigation>;
type EntityArrayResponseType = HttpResponse<INavigation[]>;

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  protected baseUrl!: string;

  constructor(protected httpClient: HttpClient,  @Inject(APP_URL)  baseUrl: string) {
    this.baseUrl= baseUrl;
  }

  find( id: string): Observable<EntityResponseType>{

    return this.httpClient
      .get<INavigation>(`${this.baseUrl}/api/shared/navigation/${id}`, {observe: 'response'});
  }

  getAll(): Observable<EntityArrayResponseType>{
    return this.httpClient
      .get<INavigation[]>(`${this.baseUrl}/api/shared/navigation/all`, {observe: 'response'});
  }

  create( navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .post<INavigation>(this.baseUrl+"/api/secured/navigation/save", navigation, {observe: 'response'});
  }

  update( navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .put<INavigation>(this.baseUrl+"/api/secured/navigation/update", navigation, {observe: 'response'});
  }

  delete(id: string): Observable<any>{
    return this.httpClient
      .delete(this.baseUrl+"/api/secured/navigation/delete/"+id, {observe: "response"});
  }
}
