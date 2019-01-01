import { TestBed, inject } from '@angular/core/testing';

import { DbContextService } from './db-context.service';

describe('DbContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbContextService]
    });
  });

  it('should be created', inject([DbContextService], (service: DbContextService) => {
    expect(service).toBeTruthy();
  }));
});
