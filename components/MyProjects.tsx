import React from 'react';
import urlTracerDemo from '@/public/url-tracer-1.png';
import blogzDemo from '@/public/Blogz.gif';
import notemakerDemo from '@/public/Notemaker.gif';
import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const projects = [
  {
    name: 'Url Tracer',
    demo: urlTracerDemo,
    github: 'https://github.com/YashwanthKothakota9/url-tracer.git',
    brief:
      'Url Tracer is a chrome extension which traces and lists how much time user spend their browsing time on a particular resource on web',
  },
  {
    name: 'Blogz',
    demo: blogzDemo,
    live: 'https://blogzs.netlify.app/',
    github: 'https://github.com/YashwanthKothakota9/Blogz.git',
    brief:
      'Blogz is a repository of amazing blogs with a feature to create blogs. Grow your audience by sharing your knowledge.',
  },
  {
    name: 'Notemaker',
    demo: notemakerDemo,
    live: 'http://172.105.62.171/',
    github: 'https://github.com/YashwanthKothakota9/NoteMaker.git',
    brief:
      'NoteMaker is a personalized note taking app with an information of upto 500 words per note.Kind of Personal Sticky notes.',
  },
];

type Project = {
  name: string;
  demo: StaticImageData;
  live?: string;
  github: string;
  brief: string;
};

export default function MyProjects() {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center">
      {projects.map((project: Project) => (
        <div
          key={project.name}
          className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:items-start border-b-[1px] pb-3 w-full"
        >
          <div className="w-full sm:w-2/5 overflow-hidden ">
            <Image
              src={project.demo}
              alt="Project Demo"
              width={220}
              height={350}
              className="object-cover rounded-lg aspect-video"
              unoptimized
            />
          </div>

          <div className="w-full sm:w-3/5 text-center sm:text-left">
            <h2 className="w-full font-semibold mb-3 break-words text-lg leading-tight transform duration-300">
              {project.name}
            </h2>
            <p className="leading-5 block w-full break-words text-sm text-zinc-300 text-justify">
              {project.brief}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end justify-center gap-2 w-full mt-4 sm:mt-0">
              <Link href={project.github}>
                <Button className="bg-[#617bff] hover:bg-[#30408d] text-white">
                  Github
                </Button>
              </Link>
              {project.live && (
                <Link href={project.live}>
                  <Button className="bg-[#ff0878] hover:bg-[#9a0447] text-white">
                    Live
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
