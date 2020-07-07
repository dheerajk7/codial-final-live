import { UPDATE_POSTS } from './actionsType';
import { API_URLS } from '../helpers/urls';

function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const url = API_URLS.fetchPost(1, 5);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.posts));
      });
  };
}
