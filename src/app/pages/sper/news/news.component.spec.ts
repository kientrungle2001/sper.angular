import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperPageNewsComponent } from './news.component';

describe('SperPageNewsComponent', () => {
  let component: SperPageNewsComponent;
  let fixture: ComponentFixture<SperPageNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperPageNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperPageNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
