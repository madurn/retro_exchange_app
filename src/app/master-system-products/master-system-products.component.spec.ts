import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSystemProductsComponent } from './master-system-products.component';

describe('MasterSystemProductsComponent', () => {
  let component: MasterSystemProductsComponent;
  let fixture: ComponentFixture<MasterSystemProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSystemProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSystemProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
