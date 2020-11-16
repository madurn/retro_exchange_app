import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProductSearchComponent } from './game-product-search.component';

describe('GameProductSearchComponent', () => {
  let component: GameProductSearchComponent;
  let fixture: ComponentFixture<GameProductSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProductSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
