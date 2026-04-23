"use client";
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import SkillsTag from "../ui/SkillsTag";
import GradientText from "../ui/GradientText";

export default function Skills() {
  return (
    <>
      <div className="px-5 py-5">
        <SectionLabel>WHAT I WORK WITH</SectionLabel>
        <SectionTitle>
          Core<GradientText gradient="grad-primary">skills</GradientText>
        </SectionTitle>
      </div>
    </>
  );
}
