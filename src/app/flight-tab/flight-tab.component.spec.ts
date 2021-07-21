import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTabComponent } from './flight-tab.component';

describe('FlightTabComponent', () => {
  let component: FlightTabComponent;
  let fixture: ComponentFixture<FlightTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
