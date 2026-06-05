import { useState, useEffect } from 'react';
import { postService } from '../../../services/postService';
import { Post } from '../../../types/post';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]); // Replace 'any' with your Post type later
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch real data from the backend
        const data = await postService.getPosts(page);
        setPosts(data.posts);
      } catch (err: unknown) {
        const fetchError = err as { response?: { data?: { message?: string } }, message?: string };
        setError(fetchError.response?.data?.message || fetchError.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return { posts, loading, error, setPage, page };
}