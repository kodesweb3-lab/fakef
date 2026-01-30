import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Separator: React.FC<SeparatorProps> = ({
  className = '',
  orientation = 'horizontal',
}) => (
  <div
    role="separator"
    className={
      orientation === 'horizontal'
        ? `h-px w-full bg-white/10 ${className}`
        : `w-px h-full bg-white/10 ${className}`
    }
  />
);
