import { TestBed } from '@angular/core/testing';

import { PostsResolverService } from './posts-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PostsResolverService', () => {
  let service: PostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
