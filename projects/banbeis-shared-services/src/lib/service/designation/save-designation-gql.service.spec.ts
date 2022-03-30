import { TestBed } from '@angular/core/testing';

import { SaveDesignationGqlService } from './save-gql.service';

describe('SaveGQLService', () => {
  let service: SaveDesignationGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDesignationGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
