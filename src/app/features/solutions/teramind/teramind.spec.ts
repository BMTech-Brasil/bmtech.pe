import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teramind } from './teramind';

describe('Teramind', () => {
  let component: Teramind;
  let fixture: ComponentFixture<Teramind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teramind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teramind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
