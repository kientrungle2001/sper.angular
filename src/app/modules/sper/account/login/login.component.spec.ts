import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperAccountLoginComponent } from './login.component';

describe('SperAccountLoginComponent', () => {
  let component: SperAccountLoginComponent;
  let fixture: ComponentFixture<SperAccountLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperAccountLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperAccountLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
