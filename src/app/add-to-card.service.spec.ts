/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddToCardService } from './add-to-card.service';

describe('Service: AddToCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToCardService]
    });
  });

  it('should ...', inject([AddToCardService], (service: AddToCardService) => {
    expect(service).toBeTruthy();
  }));
});
