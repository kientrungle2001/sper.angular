import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperFooterSectionComponent } from './section.component';

describe('SperFooterSectionComponent', () => {
  let component: SperFooterSectionComponent;
  let fixture: ComponentFixture<SperFooterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperFooterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
