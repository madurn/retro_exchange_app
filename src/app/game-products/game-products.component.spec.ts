import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProductsComponent } from './game-products.component';

describe('GameProductsComponent', () => {
  let component: GameProductsComponent;
  let fixture: ComponentFixture<GameProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
