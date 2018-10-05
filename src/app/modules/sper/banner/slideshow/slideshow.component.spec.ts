import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBannerSlideshowComponent } from './slideshow.component';

describe('SperBannerSlideshowComponent', () => {
  let component: SperBannerSlideshowComponent;
  let fixture: ComponentFixture<SperBannerSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBannerSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBannerSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
