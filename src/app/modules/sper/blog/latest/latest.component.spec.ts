import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBlogLatestComponent } from './latest.component';

describe('SperBlogLatestComponent', () => {
  let component: SperBlogLatestComponent;
  let fixture: ComponentFixture<SperBlogLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBlogLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBlogLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
