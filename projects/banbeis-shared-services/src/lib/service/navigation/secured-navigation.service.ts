import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {INavigation} from "../../models/navigation";
import {NavigationService} from "./navigation.service";
import {Observable} from "rxjs";
import {APP_URL} from "../../banbeis-shared-services.module";

type EntityResponseType = HttpResponse<INavigation>;
type EntityArrayResponseType = HttpResponse<INavigation[]>;

@Injectable({
  providedIn: 'root'
})
export class SecuredNavigationService extends NavigationService{

  constructor(httpClient: HttpClient, @Inject(APP_URL)  baseUrl: string) {
    super(httpClient, baseUrl);
  }

  create( navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .post<INavigation>(this.baseUrl+"/navigation/save", navigation, {observe: 'response'});
  }

  update(appUrl:string, navigation: INavigation): Observable<EntityResponseType>{
    return this.httpClient
      .put<INavigation>(this.baseUrl+"/navigation/save", navigation, {observe: 'response'});
  }

}
