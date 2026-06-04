"use client";

import React, { useState } from 'react';

interface ReactionButtonProps {
  initialCount: number;
}

export default function ReactionButton({ initialCount }: ReactionButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
    // TODO: Call API to persist reaction: postService.toggleReaction(postId)
  };

  return (
    <button 
      onClick={handleToggle}
      className={`flex items-center gap-1.5 text-sm transition-colors ${liked ? 'text-terracotta' : 'text-muted hover:text-warm-gold'}`}
    >
      <span className="text-lg">{liked ? '❤️' : '🤍'}</span>
      <span className="font-medium">{count}</span>
    </button>
  );
}