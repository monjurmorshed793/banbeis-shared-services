import { TestBed } from '@angular/core/testing';

import { UpdateDesignationGQLService } from './update-designation-gql.service';

describe('UpdateDesignationGQLService', () => {
  let service: UpdateDesignationGQLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDesignationGQLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
