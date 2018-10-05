import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SperNewsFeaturedsComponent } from './featureds.component';

describe('FeaturedsComponent', () => {
  let component: SperNewsFeaturedsComponent;
  let fixture: ComponentFixture<SperNewsFeaturedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SperNewsFeaturedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SperNewsFeaturedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
