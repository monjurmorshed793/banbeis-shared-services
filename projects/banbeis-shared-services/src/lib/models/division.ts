import {ILanguageType} from "./language-type";

export interface IDivision {
  divisionId: string;
  name: ILanguageType;
  url: string;
}

export interface AllDivisionResponse{
  divisions: IDivision[];
}
