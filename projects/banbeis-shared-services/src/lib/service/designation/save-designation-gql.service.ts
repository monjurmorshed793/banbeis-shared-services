import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class SaveDesignationGqlService extends Mutation{
  override document = gql`
    mutation createDesignation($name: String!, $shortName: String!, $grade: Int!, $bnName: String!, $bnShortName: String!){
      createDesignation(name: $name, shortName: $shortName, grade: $grade, bnName: $bnName, bnShortName: $bnShortName){
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
