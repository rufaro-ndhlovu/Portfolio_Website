import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import GradientText from "../ui/GradientText";

export default function Projects() {
  return (
    <>
      <div>
        <SectionLabel>What I've Built</SectionLabel>
        <SectionTitle>
          Featured <GradientText>Projects</GradientText>
        </SectionTitle>
      </div>
    </>
  );
}
