import { TestBed } from '@angular/core/testing';

import { ConnectionGithubService } from './connection-github.service';

describe('ConnectionGithubService', () => {
  let service: ConnectionGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
