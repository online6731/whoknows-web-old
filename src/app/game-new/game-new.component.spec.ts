import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contestNewComponent } from './contest-new.component';

describe('contestNewComponent', () => {
  let component: contestNewComponent;
  let fixture: ComponentFixture<contestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
