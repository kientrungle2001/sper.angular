import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageBlogDetailComponent } from './detail.component';

describe('SperPageBlogDetailComponent', () => {
  let component: SperPageBlogDetailComponent;
  let fixture: ComponentFixture<SperPageBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
