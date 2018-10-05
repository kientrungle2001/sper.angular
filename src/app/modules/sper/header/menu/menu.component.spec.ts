import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperHeaderMenuComponent } from './menu.component';

describe('SperHeaderMenuComponent', () => {
  let component: SperHeaderMenuComponent;
  let fixture: ComponentFixture<SperHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
