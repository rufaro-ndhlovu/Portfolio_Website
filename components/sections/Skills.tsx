"use client";
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import SkillsTag from "../ui/SkillsTag";
import GradientText from "../ui/GradientText";
import SkillCard from "../ui/SkillCard";

export default function Skills() {
  return (
    <>
      <div className="px-5 py-5">
        {/* section label and title */}
        <SectionLabel>WHAT I WORK WITH</SectionLabel>
        <SectionTitle>
          Core<GradientText gradient="grad-primary">skills</GradientText>
        </SectionTitle>

        {/* skill cards */}
        <div className="mt-3 w-auto flex flex-wrap">
          {/* languages */}
          <SkillCard title="Languages">
            <SkillsTag colour="teal">JavaScript ES6+</SkillsTag>
            <SkillsTag colour="teal">TypeScript</SkillsTag>
            <SkillsTag colour="orange">HTML5</SkillsTag>
            <SkillsTag colour="lavender">CSS3</SkillsTag>
            <SkillsTag colour="teal">PHP</SkillsTag>
          </SkillCard>
        </div>
      </div>
    </>
  );
}
