'use client';

import { Globe, ExternalLink } from 'lucide-react';

interface VisitButtonProps {
  href: string;
  toolId: string;
}

export function VisitButton({ href, toolId }: VisitButtonProps) {
  const handleClick = () => {
    fetch('/api/clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ toolId }),
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary w-full justify-center text-base py-4 mb-4"
      onClick={handleClick}
    >
      <Globe className="w-5 h-5" />
      Visit Website
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}
