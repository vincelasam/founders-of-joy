import React from 'react';
import CreatePostForm from "@/features/feed/components/CreatePostForm";
import StoryHighlights from "@/features/feed/components/StoryHighlights"; // <-- Add this
import PostList from "@/features/feed/components/PostList"; 

export default function FeedPage() {
  return (
    <div className="w-full">
      {/* The input to create a new post */}
      <CreatePostForm />
      <StoryHighlights /> {/* <-- Inserted here */}
      {/* 2. Render the feed of posts! */}
      <PostList />
    </div>
  );
}