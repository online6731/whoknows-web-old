import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contestViewComponent } from './contest-view.component';

describe('contestViewComponent', () => {
  let component: contestViewComponent;
  let fixture: ComponentFixture<contestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
