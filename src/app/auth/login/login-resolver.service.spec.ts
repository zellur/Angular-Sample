import { TestBed } from '@angular/core/testing';

import { LoginResolverService } from './login-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LoginResolverService', () => {
  let service: LoginResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
