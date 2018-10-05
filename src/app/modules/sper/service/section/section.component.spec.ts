import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperServiceSectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SperServiceSectionComponent;
  let fixture: ComponentFixture<SperServiceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperServiceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
