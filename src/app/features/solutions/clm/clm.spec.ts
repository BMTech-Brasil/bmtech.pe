import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clm } from '.solutions/clm';

describe('Clm', () => {
  let component: Clm;
  let fixture: ComponentFixture<Clm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
