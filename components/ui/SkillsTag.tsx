type Props = {
  children: React.ReactNode;
  colour: "teal" | "orange" | "lavender";
};

export default function SkillsTag({ children, colour }: Props) {
  const colorMap = {
    teal: "var(--color-teal)",
    orange: "var(--color-orange)",
    lavender: "var(--color-lavender)",
  };
  return (
    <>
      <div
        className="text-white font-bold py-1 px-3 border rounded-full border mb-2"
        style={{
          backgroundColor: `color-mix(in srgb, ${colorMap[colour]} 15%, transparent)`,
          borderColor: colorMap[colour],
        }}
      >
        {children}
      </div>
    </>
  );
}
