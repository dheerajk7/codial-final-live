const API_ROOT = 'http://localhost:8000/api/v1';

export const API_URLS = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  fetchPost: (page, limit) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
};
