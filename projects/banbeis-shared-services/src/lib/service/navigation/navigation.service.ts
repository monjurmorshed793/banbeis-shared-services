import { Injectable } from '@angular/core';
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


  constructor(protected httpClient: HttpClient) { }

  find( id: string): Observable<EntityResponseType>{
    return this.httpClient
      .get<INavigation>(`${APP_URL}/navigation/${id}`, {observe: 'response'});
  }

  getAll(): Observable<EntityArrayResponseType>{
    return this.httpClient
      .get<INavigation[]>(`${APP_URL}/navigation/all`, {observe: 'response'});
  }
}
