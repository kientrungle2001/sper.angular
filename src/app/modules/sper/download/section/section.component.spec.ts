import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperDownloadSectionComponent } from './section.component';

describe('SperDownloadSectionComponent', () => {
  let component: SperDownloadSectionComponent;
  let fixture: ComponentFixture<SperDownloadSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperDownloadSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperDownloadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
