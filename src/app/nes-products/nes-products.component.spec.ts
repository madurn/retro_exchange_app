import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesProductsComponent } from './nes-products.component';

describe('NesProductsComponent', () => {
  let component: NesProductsComponent;
  let fixture: ComponentFixture<NesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
