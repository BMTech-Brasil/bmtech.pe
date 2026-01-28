import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFlex } from './portal-flex';

describe('PortalFlex', () => {
  let component: PortalFlex;
  let fixture: ComponentFixture<PortalFlex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalFlex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalFlex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
