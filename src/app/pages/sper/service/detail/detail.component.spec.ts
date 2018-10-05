import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageServiceDetailComponent } from './detail.component';

describe('SperPageServiceDetailComponent', () => {
  let component: SperPageServiceDetailComponent;
  let fixture: ComponentFixture<SperPageServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
