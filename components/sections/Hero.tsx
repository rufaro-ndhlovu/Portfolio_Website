"use client";

import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background relative">
        <div>
          <h1>
            <span>Rufaro</span> Ndhlovu
          </h1>
          <div>
            <p>Front-End Developer</p>
            <p>
              Building interfaces that look good, work perfectly, and feel
              effortless on every screen, for every user.
            </p>
          </div>
          <div className="absolute">RUFARO NDHLOVU</div>
        </div>
      </div>
    </>
  );
}
