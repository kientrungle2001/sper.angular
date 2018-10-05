import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperServiceHighlightComponent } from './highlight.component';

describe('SperServiceHighlightComponent', () => {
  let component: SperServiceHighlightComponent;
  let fixture: ComponentFixture<SperServiceHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperServiceHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperServiceHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
