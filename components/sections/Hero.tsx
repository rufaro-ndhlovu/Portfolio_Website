"use client";

import React, { Children } from "react";
import GradientText from "../ui/GradientText";

export default function Hero() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center relative border-b border-[var(--border)]">
        <div className="z-50 flex w-full flex-col items-center justify-center py-32 relative">
          <h1 className="text-6xl font-bold">
            <GradientText gradient="--grad-primary">Rufaro</GradientText>{" "}
            Ndhlovu
          </h1>

          <p>
            Front-End Developer -{" "}
            <span className="text-[var(--color-orange)]">
              React Next.js TypeScript
            </span>
          </p>
          <p className="text-wrap sm:w-1/3 text-center">
            Building interfaces that look good, work perfectly, and feel
            effortless on every screen, for every user.
          </p>
        </div>
        <div className="absolute">
          <p className="heronamebg font-bold text-transparent bg-clip-text text-9xl w-full z-0 text-wrap">
            RUFARO NDHLOVU
          </p>
        </div>
      </div>
    </>
  );
}
