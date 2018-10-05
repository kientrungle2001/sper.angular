import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSperNewsComponent } from './news.component';

describe('PageSperNewsComponent', () => {
  let component: PageSperNewsComponent;
  let fixture: ComponentFixture<PageSperNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSperNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSperNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
