import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperServiceMapComponent } from './map.component';

describe('SperServiceMapComponent', () => {
  let component: SperServiceMapComponent;
  let fixture: ComponentFixture<SperServiceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperServiceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperServiceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
