import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProductDetailComponent } from './game-product-detail.component';

describe('GameProductDetailComponent', () => {
  let component: GameProductDetailComponent;
  let fixture: ComponentFixture<GameProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
