import { Injectable } from '@angular/core';
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class DeleteDesignationByIdService extends Mutation{
  override document = gql`
    mutation deleteDesignation($designationId: String!){
      deleteDesignation(designationId:$designationId)
    }
  `;
}
