import React from "react";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import GradientText from "../ui/GradientText";
import FeaturedProjectCard from "../ui/FeaturedProjectCard";

export default function Projects() {
  return (
    <>
      <div className="p-4">
        <SectionLabel>What I've Built</SectionLabel>
        <SectionTitle>
          Featured <GradientText>Projects</GradientText>
        </SectionTitle>

        <div>
          <FeaturedProjectCard title="Company Directory v2" />
        </div>
      </div>
    </>
  );
}
