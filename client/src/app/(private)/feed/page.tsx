import React from 'react';
import CreatePostForm from "@/features/feed/components/CreatePostForm";
import PostList from "@/features/feed/components/PostList"; 

export default function FeedPage() {
  return (
    <div className="w-full">
      {/* The input to create a new post */}
      <CreatePostForm />
      
      {/* 2. Render the feed of posts! */}
      <PostList />
    </div>
  );
}