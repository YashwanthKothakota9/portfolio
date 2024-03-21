import { type ClassValue, clsx } from 'clsx';
import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Yashwanth Kothakota's Portfolio",
  description = 'I am a full stack developer from India',
  image = 'https://yashwanth-portfolio.vercel.app/og.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      creator: '@Yashcsp22',
    },
    metadataBase: new URL('https://yashwanth-portfolio.vercel.app'),
  };
}
