import axios from 'axios';

// Set your API base URL here
const API_BASE_URL = 'https://blogging-api-git-main-aniruddhas-projects-0f7c6b2a.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add API methods here
export const getBlogs = async () => {
  return await api.get('/blogs');
};

export const getBlogById = async (id) => {
  return await api.get(`/blogs/${id}`);
};
export const createBlog = async (blogData) => {
    return await api.post('/blogs', blogData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type for FormData
      },
    });
  };
export const loginUser = async (credentials) => {
  return await api.post('/auth/login', credentials);
};

export const registerUser = async (users) => {
  return await api.post('/auth/register', users);
};

export default api;
