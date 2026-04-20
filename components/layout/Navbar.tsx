import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full py-6 px-16 bg-background sticky top-0 z-50 backdrop-blur-md border-b border-[var(--border)]">
        {/*logo*/}
        <h1 className="logo text-3xl font-bold animate-grad-shift text-transparent bg-clip-text">
          RN
        </h1>

        {/*nav links*/}
        <div className="flex items-center justify-between gap-8 sm:hidden md:flex lg:flex">
          <Link href="/about" className="text-foreground hover:text-orange">
            ABOUT
          </Link>
          <Link href="/skills" className="text-foreground hover:text-orange">
            SKILLS
          </Link>
          <Link href="/projects" className="text-foreground hover:text-orange">
            PROJECTS
          </Link>
          <Link href="/contact" className="text-foreground hover:text-orange">
            CONTACT
          </Link>
        </div>

        {/*lets chat button*/}
        <button className="btn-gradient px-6 py-2 rounded-full">
          LETS CHAT!
        </button>
      </nav>
    </>
  );
}
