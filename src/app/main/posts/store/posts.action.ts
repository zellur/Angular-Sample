import {Action} from '@ngrx/store';
import {Post} from '../../../models/post.model';

export const GET_POSTS = 'GET_POSTS';
export class GetPosts implements Action {
  readonly type = GET_POSTS;
  constructor(public payload: Post[]) {}
}
export type PostsAction = GetPosts;
