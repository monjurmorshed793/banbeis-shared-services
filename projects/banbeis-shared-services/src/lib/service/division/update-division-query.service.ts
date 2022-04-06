import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";
import {IDesignation} from "../../models/designation";

@Injectable({
  providedIn: 'root'
})
export class UpdateDivisionQueryService extends Mutation<IDesignation>{
  override document = gql`
    mutation updateDivision($divisionId: String!, $name: String!, $bnName: String!, $url: String){
        division(divisionId: $divisionId, name: $name, bnName: $bnName, url: $url ){
          id
          name
          bnName
          url
        }
    }
  `;
}
