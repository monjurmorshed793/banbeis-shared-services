import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class DeleteDivisionQueryService extends Mutation{
  override document = gql`
    mutation deleteDivision($divsionId: String!){
      deleteDivision(divisionID: $divisionId)
    }
  `;
}
