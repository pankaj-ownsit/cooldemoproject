import { TestBed } from '@angular/core/testing';

import { NgxprimetimeService } from './ngxprimetime.service';

describe('NgxprimetimeService', () => {
  let service: NgxprimetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxprimetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
