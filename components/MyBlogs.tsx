import { getHashnodePosts } from '@/lib/hashnode';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type Node = {
  title: string;
  brief: string;
  url: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
};

export default async function MyBlogs() {
  const posts = await getHashnodePosts();
  const nodes = posts.edges;

  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center">
      {nodes.map((node: { node: Node }) => (
        <Link key={node.node.title} href={node.node.url} className="group">
          <div className="flex gap-2 items-start">
            <div className="w-2/5 overflow-hidden ">
              <Image
                src={node.node.coverImage.url}
                alt="Blog Cover Image"
                width={220}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-3/5">
              <h2 className="w-full font-semibold mb-3 break-words text-lg leading-tight group-hover:text-[#617bff] transform duration-300">
                {node.node.title}
              </h2>
              <p className="leading-5 block w-full break-words text-sm text-zinc-300">
                {node.node.brief}
              </p>
              <div className="flex items-end justify-end gap-2 w-full">
                <p className="text-xs text-muted-foreground text-right mt-3">
                  {new Date(node.node.publishedAt).toLocaleString()}
                </p>
                <ArrowTopRightIcon className="h-3 w-3 text-muted-foreground group-hover:text-[#617bff]" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
