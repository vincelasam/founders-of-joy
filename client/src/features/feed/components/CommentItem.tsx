import React from 'react';

interface CommentItemProps {
  author: string;
  time: string;
  text: string;
}

export default function CommentItem({ author, time, text }: CommentItemProps) {
  return (
    <div className="flex gap-3 text-sm">
      <div className="w-8 h-8 rounded-full bg-light-gold flex items-center justify-center text-warm-gold font-medium shrink-0">
        {author.charAt(0)}
      </div>
      <div className="bg-cream rounded-2xl p-3 flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-deep">{author}</span>
          <span className="text-xs text-muted">{time}</span>
        </div>
        <p className="text-deep/80 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}