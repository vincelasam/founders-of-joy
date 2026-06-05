"use client";

import React, { useState, useEffect } from 'react';
import CommentItem from './CommentItem';
import { usePostActions } from '../hooks/usePostActions';
import { postService } from '../../../services/postService';
import { Comment as PostComment } from '../../../types/post';

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const { commentOnPost } = usePostActions();
  
  // Fetch comments when the section is opened
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await postService.getComments(postId);
        setComments(data.comments || []);
      } catch (error) {
        console.error("Failed to fetch comments", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    // Call API to save to database
    await commentOnPost(postId, newComment);
    
    // Refresh the comments list to show the newly added comment
    const data = await postService.getComments(postId);
    setComments(data.comments || []);
    setNewComment('');
  };

  if (loading) {
    return <div className="mt-4 pt-4 border-t border-cream text-sm text-muted text-center">Loading comments...</div>;
  }

  return (
    <div className="mt-4 pt-4 border-t border-cream">
      {/* Existing Comments */}
      <div className="flex flex-col gap-3 mb-4">
        {comments.map((comment) => (
          <CommentItem 
            key={comment.id} 
            author={comment.author_name} 
            time={new Date(comment.created_at).toLocaleString()} 
            text={comment.content} 
          />
        ))}
        {comments.length === 0 && <p className="text-xs text-muted">No comments yet. Be the first!</p>}
      </div>

      {/* Add Comment Input */}
      <form onSubmit={handleAddComment} className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-light-gold flex items-center justify-center text-warm-gold font-medium shrink-0">
          U
        </div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 bg-cream rounded-full px-4 py-2 text-sm text-deep outline-none focus:border focus:border-warm-gold/50"
        />
      </form>
    </div>
  );
}