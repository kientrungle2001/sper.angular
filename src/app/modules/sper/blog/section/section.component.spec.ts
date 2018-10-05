import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBlogSectionComponent } from './section.component';

describe('SperBlogSectionComponent', () => {
  let component: SperBlogSectionComponent;
  let fixture: ComponentFixture<SperBlogSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBlogSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
