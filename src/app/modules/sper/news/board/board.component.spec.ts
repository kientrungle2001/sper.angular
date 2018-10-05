import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperNewsBoardComponent } from './board.component';

describe('SperNewsBoardComponent', () => {
  let component: SperNewsBoardComponent;
  let fixture: ComponentFixture<SperNewsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperNewsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperNewsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
