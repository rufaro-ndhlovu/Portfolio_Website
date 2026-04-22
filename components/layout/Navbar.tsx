"use client";

import Link from "next/link";
import React from "react";
import GradientButton from "../ui/GradientButton";

export default function Navbar() {
  const handleClick = () => {
    return;
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full py-4 px-16 bg-background sticky top-0 z-50 backdrop-blur-md border-b border-[var(--border)]">
        {/*logo*/}
        <h1 className="logo text-3xl font-bold animate-grad-shift text-transparent bg-clip-text">
          RN
        </h1>

        {/*nav links*/}
        <div className="flex items-center justify-between gap-8 sm:hidden md:flex lg:flex">
          <Link href="/about" className="text-foreground">
            ABOUT
          </Link>
          <Link href="/skills" className="text-foreground">
            SKILLS
          </Link>
          <Link href="/projects" className="text-foreground">
            PROJECTS
          </Link>
          <Link href="/contact" className="text-foreground">
            CONTACT
          </Link>
        </div>

        {/*lets chat button*/}
        <GradientButton onClick={handleClick}>LETS CHAT!</GradientButton>
      </nav>
    </>
  );
}
