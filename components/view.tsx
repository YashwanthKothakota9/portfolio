'use client';

import { useEffect } from 'react';

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  console.log('Inside View');

  useEffect(() => {
    const hasViewed = localStorage.getItem('hasViewed');
    if (!hasViewed) {
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });
      localStorage.setItem('hasViewed', 'true');
    }
  }, [slug]);

  return null;
};
