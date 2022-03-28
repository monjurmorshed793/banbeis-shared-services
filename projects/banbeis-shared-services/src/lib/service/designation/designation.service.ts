import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IDesignation} from "../../models/designation";
import {APP_URL} from "../../banbeis-shared-services.module";
import {Observable} from "rxjs";
import {Apollo, gql} from "apollo-angular";

const GET_DESIGNATIONS = gql`
  query allDesignations{
    allDesignations{
      id
      name
      shortName
      grade
      bn{
        name
        shortName
      }
    }
  }
`;


type EntityResponseType = HttpResponse<IDesignation>;
type EntityArrayResponseType = HttpResponse<IDesignation[]>;


@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  protected url!: string;

  constructor(private httpClient: HttpClient, @Inject(APP_URL) url: string, private apollo: Apollo) {
    this.url = url;
  }

  find( id: string): Observable<EntityResponseType>{
    return this.httpClient
      .get<IDesignation>(`${this.url}/api/shared/designation/${id}`, {observe: 'response'});
  }

  getAll(): any{
    return this.apollo.watchQuery<any>({
      query: GET_DESIGNATIONS,
    })
      .valueChanges;
  }

  createOrUpdate( navigation: IDesignation): Observable<EntityResponseType>{
    return this.httpClient
      .put<IDesignation>(this.url+"/api/secured/designation", navigation, {observe: 'response'});
  }

  delete(id: string): Observable<any>{
    return this.httpClient
      .delete(this.url+"/api/secured/designation/"+id, {observe: "response"});
  }
}
