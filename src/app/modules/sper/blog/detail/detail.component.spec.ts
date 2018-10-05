import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBlogDetailComponent } from './detail.component';

describe('SperBlogDetailComponent', () => {
  let component: SperBlogDetailComponent;
  let fixture: ComponentFixture<SperBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
