import { Injectable } from '@angular/core';
import {gql, Query} from "apollo-angular";
import {IDivision} from "../../models/division";

@Injectable({
  providedIn: 'root'
})
export class FetchDivisionByIdQueryService extends Query<IDivision>{
override document = gql`
    query division($divisionId: String!){
      division(divisionId: $divisionId){
        divisionId
        name
        bnName
        url
      }
    }
`;
}
