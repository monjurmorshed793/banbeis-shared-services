import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {INavigation} from "../../models/navigation";
import {NavigationService} from "./navigation.service";
import {Observable} from "rxjs";

type EntityResponseType = HttpResponse<INavigation>;
type EntityArrayResponseType = HttpResponse<INavigation[]>;

@Injectable({
  providedIn: 'root'
})
export class SecuredNavigationService extends NavigationService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  create(appUrl:string, navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .post<INavigation>(appUrl+"/navigation/save", navigation, {observe: 'response'});
  }

  update(appUrl:string, navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .put<INavigation>(appUrl+"/navigation/save", navigation, {observe: 'response'});
  }

}
