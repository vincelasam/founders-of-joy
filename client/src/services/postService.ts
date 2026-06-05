import { api } from './api'; 

export const postService = {
  getPosts: async (page = 1, limit = 10) => {
    const response = await api.get(`/posts?page=${page}&limit=${limit}`);
    return response.data;
  },

  // Update this method
  createPost: async (content: string, isPrivate: boolean) => {
    const privacy = isPrivate ? 'private' : 'public';
    const response = await api.post('/posts', { content, privacy });
    return response.data;
  },

  addComment: async (postId: string, text: string) => {
    const response = await api.post(`/posts/${postId}/comments`, { content: text }); // Ensure 'content' key matches backend expectation
    return response.data;
  },

  toggleReaction: async (postId: string) => {
    const response = await api.post(`/posts/${postId}/reactions`);
    return response.data;
  }
};