import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesisProductsComponent } from './genesis-products.component';

describe('GenesisProductsComponent', () => {
  let component: GenesisProductsComponent;
  let fixture: ComponentFixture<GenesisProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenesisProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesisProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
