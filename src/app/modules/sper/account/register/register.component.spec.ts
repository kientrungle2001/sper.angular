import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperAccountRegisterComponent } from './register.component';

describe('SperAccountRegisterComponent', () => {
  let component: SperAccountRegisterComponent;
  let fixture: ComponentFixture<SperAccountRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperAccountRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperAccountRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
