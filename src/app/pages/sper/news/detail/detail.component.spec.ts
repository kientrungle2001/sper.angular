import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageNewsDetailComponent } from './detail.component';

describe('SperPageNewsDetailComponent', () => {
  let component: SperPageNewsDetailComponent;
  let fixture: ComponentFixture<SperPageNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
