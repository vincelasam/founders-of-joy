"use client";

import React from 'react';
import PostCard from './PostCard';
import { usePosts } from '../hooks/usePosts'; // Import the hook

export default function PostList() {
  const { posts, loading, error } = usePosts(); // Use the real data

  if (loading) {
    return <div className="text-center py-4 text-muted">Loading your feed...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (!posts || posts.length === 0) {
    return <div className="text-center py-8 text-muted">No posts yet. Be the first to share!</div>;
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          id={post.id}
          author={{ 
            name: post.author_name, 
            circle: "Community Circle", // Placeholder unless you add circles to DB
            initials: post.author_avatar_initials || post.author_name?.charAt(0) || "U"
          }}
          time={new Date(post.created_at).toLocaleString()} // Basic time formatting
          content={post.content}
          likes={post.reaction_count || 0}
          // If PostCard expects an array of comments, you may need to fetch them 
          // or adjust PostCard to just display the comment_count for now. 
        />
      ))}
    </div>
  );
}