import { api } from './api'; 

export const postService = {
  // Fetch paginated feed
  getPosts: async (page = 1, limit = 10) => {
    // Notice it's just '/posts' now, because '/api' is in your baseURL
    const response = await api.get(`/posts?page=${page}&limit=${limit}`);
    return response.data;
  },

  // Create a new post
  createPost: async (content: string, isPrivate: boolean) => {
    const response = await api.post('/posts', { content, isPrivate });
    return response.data;
  },

  // Add a comment
  addComment: async (postId: string, text: string) => {
    const response = await api.post(`/posts/${postId}/comments`, { text });
    return response.data;
  },

  // Toggle Like/Reaction
  toggleReaction: async (postId: string) => {
    const response = await api.post(`/posts/${postId}/reactions`);
    return response.data;
  }
};