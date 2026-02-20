import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scm } from './scm.component';

describe('Scm', () => {
  let component: Scm;
  let fixture: ComponentFixture<Scm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
