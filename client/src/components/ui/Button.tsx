import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export default function Button({ children, variant = 'primary', isLoading, className = '', ...props }: ButtonProps) {
  const baseStyle = "px-6 py-2 rounded-full text-sm tracking-wide transition disabled:opacity-50 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-deep text-white hover:bg-warm-gold",
    secondary: "bg-warm-gold text-white hover:bg-terracotta",
    outline: "bg-transparent border border-deep text-deep hover:border-warm-gold hover:text-warm-gold",
    ghost: "bg-transparent text-muted hover:text-warm-gold"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <span className="animate-spin">⏳</span> : null}
      {children}
    </button>
  );
}