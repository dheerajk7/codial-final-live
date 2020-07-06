import { UPDATE_POSTS } from './actionsType';

function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://localhost:8000/api/v1/posts?page=1&limit=5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.posts));
      });
  };
}
