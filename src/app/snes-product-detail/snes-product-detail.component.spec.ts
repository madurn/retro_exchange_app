import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnesProductDetailComponent } from './snes-product-detail.component';

describe('SnesProductDetailComponent', () => {
  let component: SnesProductDetailComponent;
  let fixture: ComponentFixture<SnesProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnesProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnesProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
