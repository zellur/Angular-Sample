import * as PostAction from './posts.action';
import {Post} from '../../../models/post.model';

export interface PostState {
  posts: State;
}

export interface State {
  posts: [];
}
const initialState: State = {
  posts: [],
};
export function postReducers(state = initialState, action: PostAction.PostsAction): {posts: Post[]} {
  switch (action.type) {
    case PostAction.GET_POSTS:
      return {
        ...state,
        posts: [...state.posts.reduce((accumulator, value) => accumulator.concat(value), action.payload)],
      };
    default:
      return state;
  }
}
