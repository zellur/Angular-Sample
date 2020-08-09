import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../models/post.model';
import * as fromPost from './store/posts.reducer';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  searchTerm: string;
  posts: Observable<{posts: Post[]}>;
  constructor(private route: ActivatedRoute,
              private store: Store<fromPost.PostState>) { }

  ngOnInit(): void {
    this.posts = this.store.pipe(select('posts'));
  }
  search(posts: Post[]): any {
    if (this.searchTerm == null || this.searchTerm === '') {
      return posts;
    } else {
      return posts.filter(
        (post) => {
          return post.title.includes(this.searchTerm) || post.body.includes(this.searchTerm);
        });
    }
  }

}
