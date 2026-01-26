import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vmc } from './vmc';

describe('Vmc', () => {
  let component: Vmc;
  let fixture: ComponentFixture<Vmc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vmc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vmc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
