"use client";
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import AboutTag from "../ui/AboutTag";

export default function About() {
  return (
    <>
      <div className="px-3 py-3">
        <SectionLabel>Who I am</SectionLabel>
        <SectionTitle>
          Front-end developer who cares about how it feels to use software
        </SectionTitle>
        <br />
        <div className="flex flex-row align-center border-l-[var(--color-teal)]  gap-8 px-2 py-4">
          <div
            className=" font-bold text-5xl w-50 flex items-center justify-center px-7 py-7 bg-clip-text text-transparent"
            style={{
              backgroundImage: "var(--grad-lav-orange)",
            }}
          >
            <h2>RN</h2>
          </div>

          {/* Section text*/}
          <div>
            <p>
              I'm Rufaro a Front-End Developer based in York, UK, specialising
              in{" "}
              <span className="font-bold">React, Next.js, and TypeScript</span>.
              I got into development because I love the moment an idea becomes
              something real that people actually use. That feeling still drives
              everything I build.
            </p>
            <br />
            <p>
              I don't just care about making things that look good, I care about
              making things that work. Clean, responsive, accessible interfaces
              that hold up under real-world conditions. My background in data
              administration means I think carefully about validation, logic,
              and reliability — the bits users never see but always feel.
            </p>
            <br />
            <p>
              I've led accessibility improvements to{" "}
              <span className="font-bold">WCAG 2.1</span> AA standard
              professionally, built and maintained live production systems, and
              developed full-stack applications from scratch.
            </p>
            <br />
            <div className="mb-2">
              <p className="italic border-l-[var(--color-teal)] border-l-4 pl-4 px-5 py-6">
                "The best part of development is watching someone use something
                I built from{" "}
                <span className="text-[var(--color-teal)]">nothing</span>. That
                never gets old."
              </p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-4 mt-6">
              <AboutTag colour="teal">React</AboutTag>
              <AboutTag colour="orange">Next.js</AboutTag>
              <AboutTag colour="lavender">TypeScript</AboutTag>
              <AboutTag colour="teal">SQL</AboutTag>
              <AboutTag colour="orange">problem Solving</AboutTag>
              <AboutTag colour="lavender">REST APIs</AboutTag>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
