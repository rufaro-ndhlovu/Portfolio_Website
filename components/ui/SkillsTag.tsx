type Props = {
  children: React.ReactNode;
  colour: "teal" | "orange" | "lavender";
};

export default function SkillsTag({ children, colour }: Props) {
  // Map the colour prop to the corresponding CSS variable
  const colorMap = {
    teal: "var(--color-teal)",
    orange: "var(--color-orange)",
    lavender: "var(--color-lavender)",
  };
  return (
    <>
      {/* Use the colorMap to set the background color and border color based on the colour prop */}
      <div
        className="text-white py-1 px-3 border rounded-full border mb-2"
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
