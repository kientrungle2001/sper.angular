import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageHomeComponent } from './home.component';

describe('SperPageHomeComponent', () => {
  let component: SperPageHomeComponent;
  let fixture: ComponentFixture<SperPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
