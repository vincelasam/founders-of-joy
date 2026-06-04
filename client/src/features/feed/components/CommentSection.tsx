"use client";

import React, { useState } from 'react';
import CommentItem from './CommentItem';

interface Comment {
  id: string;
  author: string;
  time: string;
  text: string;
}

interface CommentSectionProps {
  initialComments: Comment[];
}

export default function CommentSection({ initialComments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    console.log("Submitting comment:", newComment);
    // TODO: Call API here, then update local state
    setNewComment('');
  };

  return (
    <div className="mt-4 pt-4 border-t border-cream">
      {/* Existing Comments */}
      <div className="flex flex-col gap-3 mb-4">
        {initialComments.map((comment) => (
          <CommentItem key={comment.id} author={comment.author} time={comment.time} text={comment.text} />
        ))}
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
          className="flex-1 bg-cream rounded-full px-4 text-sm text-deep outline-none focus:border focus:border-warm-gold/50"
        />
      </form>
    </div>
  );
}