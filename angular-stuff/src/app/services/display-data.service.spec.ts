import { TestBed, inject } from '@angular/core/testing';

import { DisplayDataService } from './display-data.service';

describe('DisplayDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayDataService]
    });
  });

  it('should be created', inject([DisplayDataService], (service: DisplayDataService) => {
    expect(service).toBeTruthy();
  }));
});
