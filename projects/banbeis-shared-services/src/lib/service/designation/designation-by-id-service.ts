import {gql, Query} from "apollo-angular";
import {IDesignation} from "../../models/designation";
import {Injectable} from "@angular/core";

export interface DesignationByIdResponse{
  designation: IDesignation;
}

@Injectable({
  providedIn: 'root'
})
export class DesignationByIdService extends Query<IDesignation>{
  override document = gql`
    query designation($designationId: String!){
      designation(designationId: $designationId){
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
