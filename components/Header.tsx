import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-20 w-full h-20 border-b flex items-center bg-zinc-900">
      <div className="container flex items-center justify-between">
        <h1 className="text-xl">Yashwanth Kothakota</h1>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://twitter.com/Yashcsp22">
            <Twitter className="h-6 w-6 fill-white cursor-pointer" />
          </Link>
          <Link href="https://github.com/YashwanthKothakota9">
            <Github className="h-6 w-6 fill-white " />
          </Link>
          <Link href="https://www.linkedin.com/in/yashwanthkothakota/">
            <Linkedin className="h-6 w-6 fill-white " />
          </Link>
        </div>
      </div>
    </div>
  );
}
