export interface IDivision {
  divisionId: string;
  name: string;
  bnName: string;
  url: string;
}

export interface AllDivisionResponse{
  divisions: IDivision[];
}
