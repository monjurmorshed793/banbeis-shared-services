import { TestBed } from '@angular/core/testing';

import { SecuredNavigationService } from './secured-navigation.service';

describe('SecuredNavigationService', () => {
  let service: SecuredNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuredNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
