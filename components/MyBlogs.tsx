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
    <div className="w-full flex flex-col gap-6 items-center justify-center px-4 sm:px-0">
      {nodes.map((node: { node: Node }) => (
        <Link
          key={node.node.title}
          href={node.node.url}
          className="group border-b-[1px] pb-3 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:items-start">
            <div className="w-full sm:w-2/5 overflow-hidden ">
              <Image
                src={node.node.coverImage.url}
                alt="Blog Cover Image"
                width={220}
                height={300}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="w-full sm:w-3/5">
              <h2 className="w-full font-semibold mb-3 break-words text-lg leading-tight group-hover:text-[#617bff] transform duration-300">
                {node.node.title}
              </h2>
              <p className="leading-5 block w-full break-words text-sm text-zinc-300 text-justify">
                {node.node.brief}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 w-full mt-4 sm:mt-2">
                <p className="text-xs text-muted-foreground text-right">
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
