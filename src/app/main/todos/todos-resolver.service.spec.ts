import { TestBed } from '@angular/core/testing';

import { TodosResolverService } from './todos-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TodosResolverService', () => {
  let service: TodosResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodosResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
