import { EyeOpenIcon } from '@radix-ui/react-icons';
import { Redis } from '@upstash/redis';
import React from 'react';

export const revalidate = 60;

export default async function PageViews({ slug }: { slug: string }) {
  const redis = Redis.fromEnv();

  console.log('Inside pageviews');

  const views =
    (await redis.get<number>(['pageviews', 'portfolio', slug].join(':'))) ?? 0;

  console.log('Views', views);

  return (
    <div className="flex items-center gap-2">
      <EyeOpenIcon className="h-[12px] w-[12px]" />
      <p className="text-xs">{views} views</p>
    </div>
  );
}
