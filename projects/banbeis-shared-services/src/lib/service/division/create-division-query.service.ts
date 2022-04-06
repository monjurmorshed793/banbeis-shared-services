import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";
import {IDivision} from "../../models/division";

@Injectable({
  providedIn: 'root'
})
export class CreateDivisionQueryService extends Mutation<IDivision>{
  override document = gql`
    mutation createDivision($name: String!, $bnName: String!, $url: String!){
        division(name: $name, bnName: $bnName, url: $url){
          divisionId
          name
          bnName
          url
        }
    }
  `;
}
