import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IDivision} from "../../models/division";
import {APP_URL} from "../../banbeis-shared-services.module";
import {Observable} from "rxjs";
import {CrudService} from "../crud.service";

type EntityResponseType = HttpResponse<IDivision>;
type EntityArrayResponseType = HttpResponse<IDivision[]>;

@Injectable({
  providedIn: 'root'
})
export class DivisionService implements CrudService{

  protected baseUrl!: string;

  constructor(private httpClient: HttpClient,
              @Inject(APP_URL) baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  findById(id: string): Observable<EntityResponseType>{
    return this.httpClient
      .get<IDivision>(`${this.baseUrl}/api/shared/division/${id}`, {observe: "response"});
  }

  getAll(): Observable<EntityArrayResponseType>{
    return this.httpClient
      .get<IDivision[]>(`${this.baseUrl}/api/shared/division/all`, {observe: "response"})
  }

  generateReport(): void{
    this.getReportResponse().subscribe((data)=>{
      console.log(data);
      const blob = new Blob([data], {type: 'application/pdf'});

      var downloadURL = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "divisions.pdf";
      console.log(downloadURL);
      console.log(data);
      console.log(link);
      link.click();
    });
  }

  getReportResponse(): Observable<any>{
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    return this.httpClient.get(`${this.baseUrl}/api/shared/division/report`, httpOptions);
  }

  save(division: IDivision): Observable<EntityResponseType>{
    return this.httpClient
      .put<IDivision>(this.baseUrl+"/api/secured/division", division, {observe: 'response'});
  }

  delete(id: string): Observable<any>{
    return this.httpClient
      .delete(this.baseUrl+"/api/secured/division/delete/"+id, {observe: "response"});
  }

}
