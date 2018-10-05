import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageBlogComponent } from './blog.component';

describe('SperPageBlogComponent', () => {
  let component: SperPageBlogComponent;
  let fixture: ComponentFixture<SperPageBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
