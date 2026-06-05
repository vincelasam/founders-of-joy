"use client";

import React, { useState } from 'react';
import ReactionButton from './ReactionButton';
import CommentSection from './CommentSection';

interface PostProps {
  id: number; // Changed from string to number to match DB
  author: { name: string; circle: string; initials: string };
  time: string;
  content: string;
  likes: number;
  // 'comments' array has been completely removed
}

export default function PostCard({ id, author, time, content, likes }: PostProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-warm-gold/15 mb-4">
      {/* Header: Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warm-gold to-terracotta flex items-center justify-center text-white font-medium shrink-0">
          {author.initials}
        </div>
        <div>
          <div className="font-semibold text-deep text-sm">{author.name}</div>
          <div className="text-xs text-muted flex gap-2">
            <span>{time}</span>
            <span>·</span>
            <span>{author.circle}</span>
          </div>
        </div>
      </div>

      {/* Body: Content */}
      <p className="text-sm text-deep leading-relaxed mb-4 whitespace-pre-wrap">
        {content}
      </p>

      {/* Footer: Actions */}
      <div className="flex items-center gap-6 pt-3 border-t border-cream">
        <ReactionButton initialCount={likes} />
        
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 text-sm text-muted hover:text-warm-gold transition-colors"
        >
          <span className="text-lg">💬</span>
          <span className="font-medium">Comment</span>
        </button>
      </div>

      {/* Comments Section Toggle */}
      {/* Passing ID as a string in case your CommentSection still expects a string */}
      {showComments && <CommentSection postId={id.toString()} />}
    </div>
  );
}