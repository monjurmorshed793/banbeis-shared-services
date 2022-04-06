import {Injectable} from '@angular/core';
import {AllDivisionResponse} from "../../models/division";
import {gql, Query} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class AllDivisionQueryService extends Query<AllDivisionResponse>{
  override document = gql`
    query divisions{
      divisions{
        divisionId
        name
        bnName
        url
      }
    }
  `;
}
