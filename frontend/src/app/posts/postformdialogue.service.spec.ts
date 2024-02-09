import { TestBed } from '@angular/core/testing';

import { PostformdialogueService } from './postformdialogue.service';

describe('PostformdialogueService', () => {
  let service: PostformdialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostformdialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
