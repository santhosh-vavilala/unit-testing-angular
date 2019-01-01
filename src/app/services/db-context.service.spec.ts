import { TestBed, inject } from '@angular/core/testing';
import { DbContextService } from './db-context.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DbContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DbContextService]
    })
  });

  it('should be created', inject([DbContextService], (service: DbContextService) => {
    expect(service).toBeTruthy();
  }));
});
