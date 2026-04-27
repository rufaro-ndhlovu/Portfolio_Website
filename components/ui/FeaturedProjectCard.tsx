"use client";

import GradientButton from "./GradientButton";

type Props = {
  id: string;

  title: string;

  description: string;

  stackLabel: string;

  liveUrl: string;

  githubUrl: string;

  thumbGradient: "p1" | "p2" | "p3";
};

export default function FeaturedProjectCard({
  id,
  title,
  description,
  stackLabel,
  liveUrl,
  githubUrl,
  thumbGradient,
}: Props) {
  const thumbGradientMap = {
    p1: "var(--grad-primary)",
    p2: "var(--grad-teal-lav)",
    p3: "var(--grad-lav-orange)",
  };

  const handleClick = () => {
    return;
  };

  return (
    <>
      <div>
        <div>Image</div>
        <div>{stackLabel}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <GradientButton onClick={handleClick}>VIEW LIVE</GradientButton>
      </div>
    </>
  );
}
