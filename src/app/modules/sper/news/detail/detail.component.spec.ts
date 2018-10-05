import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperNewsDetailComponent } from './detail.component';

describe('SperNewsDetailComponent', () => {
  let component: SperNewsDetailComponent;
  let fixture: ComponentFixture<SperNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
