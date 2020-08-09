import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiEndpointsEnum} from '../../models/constants/ApiEndpoints.enum';
import {Post} from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(ApiEndpointsEnum.POSTS_ENDPOINT);
  }
}
