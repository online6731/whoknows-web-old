import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contestPlayComponent } from './contest-play.component';

describe('contestPlayComponent', () => {
  let component: contestPlayComponent;
  let fixture: ComponentFixture<contestPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contestPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contestPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
