import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperFooterCopyrightComponent } from './copyright.component';

describe('SperFooterCopyrightComponent', () => {
  let component: SperFooterCopyrightComponent;
  let fixture: ComponentFixture<SperFooterCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperFooterCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperFooterCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
