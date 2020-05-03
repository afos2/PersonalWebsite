import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineResumeComponent } from './online-resume.component';

describe('OnlineResumeComponent', () => {
  let component: OnlineResumeComponent;
  let fixture: ComponentFixture<OnlineResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
