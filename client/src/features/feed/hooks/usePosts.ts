import { useState, useEffect } from 'react';
import { postService } from '../../../services/postService';

export function usePosts() {
  const [posts, setPosts] = useState<any[]>([]); // Replace 'any' with your Post type later
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // UNCOMMENT THIS WHEN BACKEND IS READY:
        // const data = await postService.getPosts(page);
        // setPosts(data.posts);
        
        // FAKE DELAY FOR NOW:
        setTimeout(() => setLoading(false), 800);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return { posts, loading, error, setPage, page };
}