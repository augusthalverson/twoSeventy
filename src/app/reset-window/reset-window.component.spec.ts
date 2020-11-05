import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWindowComponent } from './reset-window.component';

describe('ResetWindowComponent', () => {
  let component: ResetWindowComponent;
  let fixture: ComponentFixture<ResetWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
