import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './invention.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
  });

  it('should ...', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
