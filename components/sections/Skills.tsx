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
      <div className="px-5 py-5 pt-5">
        {/* section label and title */}
        <SectionLabel>WHAT I WORK WITH</SectionLabel>
        <SectionTitle>
          Core <GradientText>skills</GradientText>
        </SectionTitle>
        <br />

        {/* skill cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2">
          <div>
            <SkillCard title="Languages">
              <SkillsTag colour="teal">JavaScript ES6+</SkillsTag>
              <SkillsTag colour="lavender">TypeScript</SkillsTag>
              <SkillsTag colour="orange">HTML5</SkillsTag>
              <SkillsTag colour="lavender">CSS3</SkillsTag>
              <SkillsTag colour="teal">PHP</SkillsTag>
              <SkillsTag colour="orange">Askia Script</SkillsTag>
            </SkillCard>
          </div>

          {/* frameworks and ui */}
          <div>
            <SkillCard title="Frameworks and UI">
              <SkillsTag colour="teal">React</SkillsTag>
              <SkillsTag colour="teal">Next.js</SkillsTag>
              <SkillsTag colour="orange">JQuery</SkillsTag>
              <SkillsTag colour="lavender">Tailwind CSS</SkillsTag>
              <SkillsTag colour="teal">Bootstrap</SkillsTag>
            </SkillCard>
          </div>

          {/* Back-end and data*/}
          <div>
            <SkillCard title="Back-end and Data">
              <SkillsTag colour="teal">Node.js</SkillsTag>
              <SkillsTag colour="lavender">MariaDB</SkillsTag>
              <SkillsTag colour="orange">MongoDB</SkillsTag>
              <SkillsTag colour="lavender">PostgreSQL</SkillsTag>
              <SkillsTag colour="teal">MySQL</SkillsTag>
              <SkillsTag colour="orange">Access</SkillsTag>
            </SkillCard>
          </div>

          {/* Forms & state*/}
          <div>
            <SkillCard title="Forms & state">
              <SkillsTag colour="teal">Rest APIs</SkillsTag>
              <SkillsTag colour="lavender">Redux</SkillsTag>
              <SkillsTag colour="orange">Formik</SkillsTag>
              <SkillsTag colour="teal">Yup</SkillsTag>
            </SkillCard>
          </div>

          {/* Tooling*/}
          <div>
            <SkillCard title="Tooling">
              <SkillsTag colour="teal">Git / GitHub</SkillsTag>
              <SkillsTag colour="lavender">Agile / Scrum</SkillsTag>
              <SkillsTag colour="orange">ESLint</SkillsTag>
              <SkillsTag colour="teal">Prettier</SkillsTag>
              <SkillsTag colour="lavender">VS Code</SkillsTag>
            </SkillCard>
          </div>

          {/* Accesibility*/}
          <div>
            <SkillCard title="Accesibility">
              <SkillsTag colour="teal">WCAG 2.1 AA</SkillsTag>
              <SkillsTag colour="lavender">Semantic HTML</SkillsTag>
              <SkillsTag colour="orange">Screen readers</SkillsTag>
            </SkillCard>
          </div>
        </div>
      </div>
    </>
  );
}
