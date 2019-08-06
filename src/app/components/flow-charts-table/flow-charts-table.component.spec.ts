import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartsTableComponent } from './flow-charts-table.component';

describe('FlowChartsTableComponent', () => {
  let component: FlowChartsTableComponent;
  let fixture: ComponentFixture<FlowChartsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
