import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {INavigation} from "../../models/navigation";
import {Observable} from "rxjs";

type EntityResponseType = HttpResponse<INavigation>;
type EntityArrayResponseType = HttpResponse<INavigation[]>;

@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  constructor(protected httpClient: HttpClient) { }

  find(appUrl: string, id: string): Observable<EntityResponseType>{
    return this.httpClient
      .get<INavigation>(`${appUrl}/navigation/${id}`, {observe: 'response'});
  }

  getAll(appUrl: string): Observable<EntityArrayResponseType>{
    return this.httpClient
      .get<INavigation[]>(`${appUrl}/navigation/all`, {observe: 'response'});
  }
}
