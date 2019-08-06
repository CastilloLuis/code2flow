import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartPageComponent } from './flow-chart-page.component';

describe('FlowChartPageComponent', () => {
  let component: FlowChartPageComponent;
  let fixture: ComponentFixture<FlowChartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
