import {IDesignation} from "../../models/designation";
import {gql, Query} from "apollo-angular";
import {Injectable} from "@angular/core";

export interface AllDesignationResponse {
  designations: IDesignation[];
}


@Injectable({
  providedIn: 'root'
})
export class AllDesignationsGQL extends Query<AllDesignationResponse>{
  override document = gql`
    query designations{
      designations{
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
}
