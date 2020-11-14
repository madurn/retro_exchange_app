import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnesProductsComponent } from './snes-products.component';

describe('SnesProductsComponent', () => {
  let component: SnesProductsComponent;
  let fixture: ComponentFixture<SnesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
