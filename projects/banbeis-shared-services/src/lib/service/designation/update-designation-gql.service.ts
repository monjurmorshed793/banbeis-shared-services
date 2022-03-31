import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";
import {IDesignation} from "../../models/designation";

@Injectable({
  providedIn: 'root'
})
export class UpdateDesignationGQLService extends Mutation<IDesignation>{

  override document = gql`
    mutation updateDesignation($id: String!,$name: String!, $shortName: String!, $grade: Int!, $bnName: String!, $bnShortName: String!){
      updateDesignation(id: $id, name: $name, shortName: $shortName, grade: $grade, bnName: $bnName, bnShortName: $bnShortName){
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
