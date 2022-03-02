import { TestBed } from '@angular/core/testing';

import { BanbeisSharedServicesService } from './banbeis-shared-services.service';

describe('BanbeisSharedServicesService', () => {
  let service: BanbeisSharedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanbeisSharedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
