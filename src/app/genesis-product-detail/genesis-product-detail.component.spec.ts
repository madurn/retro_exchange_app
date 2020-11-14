import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesisProductDetailComponent } from './genesis-product-detail.component';

describe('GenesisProductDetailComponent', () => {
  let component: GenesisProductDetailComponent;
  let fixture: ComponentFixture<GenesisProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenesisProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesisProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
