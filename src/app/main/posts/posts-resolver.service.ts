import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {Post} from '../../models/post.model';
import * as fromPost from './store/posts.reducer';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import * as PostsAction from './store/posts.action';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService {

  constructor(private postService: PostService, private store: Store<fromPost.PostState>) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    // return this.postService.getPosts();
    return this.postService.getPosts().pipe(
      tap((response) => {
        this.store.dispatch(new PostsAction.GetPosts(response));
      })
    );
  }
}
