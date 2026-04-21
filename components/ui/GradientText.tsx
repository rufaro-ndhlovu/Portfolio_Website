import { Children } from "react";

type Props = {
  gradient: string;
  children: React.ReactNode;
};

export default function GradientText({ gradient, children }: Props) {
  return (
    <>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: `var(${gradient})` }}
      >
        {children}
      </span>
    </>
  );
}
