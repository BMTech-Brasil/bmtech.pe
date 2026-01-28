import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudRisk } from './cloud-risk';

describe('CloudRisk', () => {
  let component: CloudRisk;
  let fixture: ComponentFixture<CloudRisk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudRisk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudRisk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
