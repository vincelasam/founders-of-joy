"use client";

import React, { useState } from 'react';

export default function CreatePostForm() {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // TODO: Call your postService.createPost() here
    console.log("Submitting Post:", { content, isPrivate });
    
    // Clear form after submitting
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 shadow-sm border border-warm-gold/15 mb-6">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-light-gold flex items-center justify-center text-warm-gold font-semibold shrink-0">
          U
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your joy, thoughts, or reflections..."
          className="w-full bg-cream rounded-xl p-3 text-sm text-deep outline-none resize-none placeholder:text-muted focus:border focus:border-warm-gold/50"
          rows={3}
        />
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-muted">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
            className="accent-warm-gold cursor-pointer"
          />
          Circle Only (Private)
        </label>
        
        <button
          type="submit"
          disabled={!content.trim()}
          className="bg-deep text-white px-6 py-2 rounded-full text-sm tracking-wide transition hover:bg-warm-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </div>
    </form>
  );
}