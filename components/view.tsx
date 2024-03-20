'use client';

import { useEffect } from 'react';

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  console.log('Inside View');

  useEffect(() => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
