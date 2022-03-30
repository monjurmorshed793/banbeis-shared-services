import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class UpdateDesignationGQLService extends Mutation{

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
