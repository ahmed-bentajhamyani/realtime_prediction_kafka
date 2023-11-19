import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionCardComponent } from './prediction-card.component';

describe('PredictionCardComponent', () => {
  let component: PredictionCardComponent;
  let fixture: ComponentFixture<PredictionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictionCardComponent]
    });
    fixture = TestBed.createComponent(PredictionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
