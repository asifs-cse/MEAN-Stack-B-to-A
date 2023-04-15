import { TestBed } from '@angular/core/testing';

import { DepandServicesService } from './depand-services.service';

describe('DepandServicesService', () => {
  let service: DepandServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepandServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
