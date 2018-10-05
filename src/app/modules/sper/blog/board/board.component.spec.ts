import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperBlogBoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: SperBlogBoardComponent;
  let fixture: ComponentFixture<SperBlogBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperBlogBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperBlogBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
