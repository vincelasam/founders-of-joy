import { useState } from 'react';
import { postService } from '../../../services/postService';

export function usePostActions() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createPost = async (content: string, isPrivate: boolean) => {
    setIsSubmitting(true);
    try {
      await postService.createPost(content, isPrivate);
      // You might want to trigger a re-fetch of posts here or append to state
    } catch (error) {
      console.error("Failed to create post", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reactToPost = async (postId: string) => {
    try {
      await postService.toggleReaction(postId);
    } catch (error) {
      console.error("Failed to react to post", error);
    }
  };

  const commentOnPost = async (postId: string, text: string) => {
    try {
      await postService.addComment(postId, text);
    } catch (error) {
      console.error("Failed to add comment", error);
    }
  };

  return { createPost, reactToPost, commentOnPost, isSubmitting };
}