import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBannerTopComponent } from './top.component';

describe('SperBannerTopComponent', () => {
  let component: SperBannerTopComponent;
  let fixture: ComponentFixture<SperBannerTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBannerTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBannerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
