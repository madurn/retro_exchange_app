import { TestBed } from '@angular/core/testing';

import { GameProductService } from './game-product.service';

describe('GameProductService', () => {
  let service: GameProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
