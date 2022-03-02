import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';

describe('BanbeisSharedServicesComponent', () => {
  let component: BanbeisSharedServicesComponent;
  let fixture: ComponentFixture<BanbeisSharedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanbeisSharedServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanbeisSharedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
