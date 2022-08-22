import { TestBed } from '@angular/core/testing';

import { MessagingDataServiceService } from './messaging-data-service.service';

describe('MessagingDataServiceService', () => {
  let service: MessagingDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
