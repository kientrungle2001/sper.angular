import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSperNewsDetailComponent } from './detail.component';

describe('PageSperNewsDetailComponent', () => {
  let component: PageSperNewsDetailComponent;
  let fixture: ComponentFixture<PageSperNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSperNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSperNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
