'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
}

export function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button className="btn-secondary w-full justify-center" onClick={handleShare}>
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}
