import React from 'react';
import PostCard from './PostCard';

// DUMMY DATA: Delete this once the backend is ready!
const MOCK_POSTS = [
  {
    id: "1",
    author: { name: "Maria R.", circle: "Neurodivergent Circle", initials: "MR" },
    time: "2 hours ago",
    content: "Today I realized healing is not linear. I'm grateful for the people who remind me that growth takes time. Setting small boundaries has changed my entire week.",
    likes: 12,
    comments: [
      { id: "c1", author: "James L.", time: "1 hour ago", text: "So proud of you! Boundaries are everything." }
    ]
  },
  {
    id: "2",
    author: { name: "Ana C.", circle: "Entrepreneur Circle", initials: "AC" },
    time: "5 hours ago",
    content: "Leading with wellness first changed everything in my business. We just implemented 'No-Meeting Fridays' and the team's energy is through the roof. Purpose and profit can truly coexist.",
    likes: 34,
    comments: []
  }
];

export default function PostList() {
  return (
    <div className="flex flex-col">
      {MOCK_POSTS.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}