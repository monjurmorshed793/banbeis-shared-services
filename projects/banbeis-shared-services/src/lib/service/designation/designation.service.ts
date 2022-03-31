import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IDesignation} from "../../models/designation";
import {APP_URL} from "../../banbeis-shared-services.module";
import {Observable} from "rxjs";
import {Apollo, gql, Mutation, MutationResult, Query, QueryRef} from "apollo-angular";
import {UpdateDesignationGQLService} from "./update-designation-gql.service";
import {MutationOptionsAlone} from "apollo-angular/build/types";
import {DesignationByIdService} from "./designation-by-id-service";
import {AllDesignationResponse, AllDesignationsGqlService} from "./all-designations-gql.service";
import {SaveDesignationGqlService} from "./save-designation-gql.service";
import {DeleteDesignationByIdService} from "./delete-designation-by-id.service";







type EntityResponseType = HttpResponse<IDesignation>;
type EntityArrayResponseType = HttpResponse<IDesignation[]>;


@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  protected url!: string;

  constructor(private httpClient: HttpClient,
              @Inject(APP_URL) url: string,
              private apollo: Apollo,
              private designationByIdService: DesignationByIdService,
              private allDesignationService: AllDesignationsGqlService,
              private saveDesignationService: SaveDesignationGqlService,
              private updateDesignationService: UpdateDesignationGQLService,
              private deleteDesignationService: DeleteDesignationByIdService) {
    this.url = url;
  }

  getDesignationById(id: string): QueryRef<IDesignation>{
    return this.designationByIdService.watch({designationId: id});
  }

  getAllDesignations(): QueryRef<AllDesignationResponse>{
    return this.allDesignationService.watch();
  }

  find( id: string): Observable<EntityResponseType>{
    return this.httpClient
      .get<IDesignation>(`${this.url}/api/shared/designation/${id}`, {observe: 'response'});
  }


  createOrUpdate( navigation: IDesignation): Observable<EntityResponseType>{
    return this.httpClient
      .put<IDesignation>(this.url+"/api/secured/designation", navigation, {observe: 'response'});
  }

  createDesignation(designation: IDesignation): Observable<MutationResult<IDesignation>>{
    return this.saveDesignationService.mutate({ name: designation.name, shortName: designation.shortName, grade: designation.grade, bnName: designation.bn.name, bnShortName: designation.bn.shortName});
  }

  updateDesignation(designation: IDesignation): Observable<MutationResult<IDesignation>>{
    return this.updateDesignationService.mutate({id: designation.id, name: designation.name, shortName: designation.shortName, grade: designation.grade, bnName: designation.bn.name, bnShortName: designation.bn.shortName});
  }

  deleteDesignation(designationId: string): Observable<MutationResult<{}>>{
    return this.deleteDesignationService.mutate({designationId: designationId});
  }

  delete(id: string): Observable<any>{
    return this.httpClient
      .delete(this.url+"/api/secured/designation/"+id, {observe: "response"});
  }
}
