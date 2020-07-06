import { UPDATE_POSTS } from '../actions/actionsType';

export default function posts(state = { posts: [] }, action) {
  console.log(action.posts);
  switch (action.type) {
    case UPDATE_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }

    default: {
      return state;
    }
  }
}
