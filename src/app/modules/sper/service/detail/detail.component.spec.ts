import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperServiceDetailComponent } from './detail.component';

describe('SperServiceDetailComponent', () => {
  let component: SperServiceDetailComponent;
  let fixture: ComponentFixture<SperServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
