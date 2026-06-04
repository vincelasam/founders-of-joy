import React from 'react';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Avatar({ initials, size = 'md', className = '' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg'
  };

  return (
    <div className={`rounded-full bg-light-gold flex items-center justify-center text-warm-gold font-semibold shrink-0 ${sizeClasses[size]} ${className}`}>
      {initials}
    </div>
  );
}