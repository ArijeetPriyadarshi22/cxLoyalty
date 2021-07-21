import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightContentFormComponent } from './flight-content-form.component';

describe('FlightContentFormComponent', () => {
  let component: FlightContentFormComponent;
  let fixture: ComponentFixture<FlightContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightContentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
