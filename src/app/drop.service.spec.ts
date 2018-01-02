import { TestBed, inject } from '@angular/core/testing';

import { DropService } from './drop.service';

describe('DropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropService]
    });
  });

  it('should be created', inject([DropService], (service: DropService) => {
    expect(service).toBeTruthy();
  }));
});
