"use client";
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <>
      <div>
        <SectionLabel>Who I am</SectionLabel>
        <SectionTitle>
          Front-end developer who cares about how it feels to use software
        </SectionTitle>
        <br />
        <div className="flex flex-row align-center ">
          <div
            className="bold text-5xl w-50 flex align-center justify center px-7 py-7 bg-clip-text text-transparent"
            style={{
              backgroundImage: "var(--grad-lav-orange)",
              border: "1px solid var(--grad-lav-orange)",
            }}
          >
            RN
          </div>
          <div>
            <p>
              I'm Rufaro a Front-End Developer based in York, UK, specialising
              in React, Next.js, and TypeScript. I got into development because
              I love the moment an idea becomes something real that people
              actually use. That feeling still drives everything I build.
            </p>
            <br />
            <p>
              I don't just care about making things that look good â€” I care
              about making things that work. Clean, responsive, accessible
              interfaces that hold up under real-world conditions. My background
              in data administration means I think carefully about validation,
              logic, and reliability â€” the bits users never see but always
              feel.
            </p>
            <br />
            <p>
              I've led accessibility improvements to WCAG 2.2 AA standard
              professionally, built and maintained live production systems, and
              developed full-stack applications from scratch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
