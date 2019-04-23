import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestNewComponent } from './contest-new.component';

describe('contestNewComponent', () => {
  let component: ContestNewComponent;
  let fixture: ComponentFixture<ContestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
